using Domain.Entities.usermanagement;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TOIMS.API.Models;

namespace TOIMS.API.Controllers.UserManagement
{
    public class SignupRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [ApiController]
    [Route("api/usermanagement/[controller]")]
    public class AuthController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;
        public AuthController(IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        // POST: api/usermanagement/Auth/Signup
        [HttpPost("Signup")]
        public IActionResult Signup([FromBody] SignupRequest request)
        {
            // 1. Validate input
            if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
                return BadRequest("Email and password are required.");

            // 2. Generate OTP
            var otp = new Random().Next(100000, 999999).ToString();

            // 3. Save OTP and tokenId to DB
            Users_OtpToken otpToken = SaveOtpToDatabase(request.Email, otp);

            // 4. Send OTP to user's email
            SendOtpEmail(request.Email, otp);

            // 5. Return tokenId to frontend
            return Ok(new { otpToken });
        }

        [HttpPost("VerifyOtp")]
        public IActionResult VerifyOtp([FromBody] OtpVerifyRequest request)
        {
            var otpToken = _unitOfWork.UsersOtpToken.GetById(request.OtpTokenId).Result;
            if (otpToken == null)
                return NotFound("OTP token not found.");

            if (otpToken.IsUsed)
                return BadRequest("OTP has already been used.");

            if (otpToken.Expiry < DateTime.Now)
                return BadRequest("OTP has expired.");

            if (otpToken.Code != request.Code)
                return BadRequest("Invalid OTP code.");

            otpToken.IsUsed = true;
            _unitOfWork.UsersOtpToken.Update(otpToken);
            _unitOfWork.CommitAsync().Wait();

            return Ok(new { success = true, message = "OTP verified successfully." });
        }

        // POST: api/usermanagement/Auth/Login
        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var userLogin = _unitOfWork.UsersLogin.GetAllAsync().Result
                .FirstOrDefault(u => u.Email == request.Email && u.Password == request.Password);
            if (userLogin == null)
                return Unauthorized("Invalid email or password.");

            var claims = new[]
            {
                new Claim("UserId", userLogin.Id.ToString()),
                new Claim(ClaimTypes.Email, userLogin.Email)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds
            );
            return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
        }

        [HttpGet("Me")]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public IActionResult Me()
        {
            var userId = User.FindFirst("UserId")?.Value;
            var email = User.FindFirst(ClaimTypes.Email)?.Value;
            return Ok(new { userId, email });
        }

        private Users_OtpToken SaveOtpToDatabase(string email, string otp)
        {
            // Find user by email
            var userLogin = _unitOfWork.UsersLogin.GetAllAsync().Result.FirstOrDefault(u => u.Email == email);
            if (userLogin == null)
            {
                // For demo, create a new user login
                userLogin = new Users_Login { 
                    Email = email, 
                    Password = "demo", 
                    Status = "For Verification", 
                    CreatedAt = DateTime.Now 
                };
                _unitOfWork.UsersLogin.CreateAsync(userLogin).Wait();
                _unitOfWork.CommitAsync().Wait();
            }
            // Create OTP token
            Users_OtpToken otpToken = new Users_OtpToken
            {
                LoginId = userLogin.Id,
                Code = otp,
                Expiry = DateTime.Now.AddMinutes(5),
                IsUsed = false
            };
            _unitOfWork.UsersOtpToken.CreateAsync(otpToken).Wait();
            _unitOfWork.CommitAsync().Wait();
            return otpToken;
        }

        private void SendOtpEmail(string email, string otp)
        {
            // For demo, just log
            Console.WriteLine($"Sending OTP {otp} to {email}");
        }
    }
}
