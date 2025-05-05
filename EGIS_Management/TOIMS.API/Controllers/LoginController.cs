using Domain.Entities.login;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Windows;
using System.Security;
using System.Transactions;
using System.Data;
using System.Web;
using System.Configuration;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowCors")]
    public class LoginController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        private readonly IConfiguration _configuration;
        public LoginController(IUnitOfWork unitofwork, IConfiguration configuration)
        {
            _unitofwork = unitofwork;
            _configuration = configuration;
        }
        [HttpGet("{Email}")]
        public async Task<IActionResult> GetbyEmail(string email)
        {
            var emailDto = await _unitofwork.Login.GetByEmail(email);
            return Ok(emailDto);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Login tableLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new Login()
            {
                Email = tableLogin.Email,
                Password = tableLogin.Password,
                CreatedAt = DateTime.Now,
            };

            await _unitofwork.Login.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> login([FromBody] Login login)
        {
            var loginData = await _unitofwork.Login.GetByEmail(login.Email);

            var keyString = _configuration["Jwt:Key"];
            if (string.IsNullOrEmpty(keyString))
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "JWT key is not configured.");
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(keyString);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity([new Claim(ClaimTypes.Email, login.Email)]),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new { Token = tokenHandler.WriteToken(token) });
        }
    }
}