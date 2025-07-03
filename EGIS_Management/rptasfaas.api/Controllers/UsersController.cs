using Domain.Entities.rptas;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace RPTASFAASS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public UsersController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpGet("GetUserName")]
        public async Task<IActionResult> GetUserNameByRole(string role)
        {
            var users = await _unitofwork.Users.GetUserNameByRoleList(role);

            return Ok(users);
        }

        [HttpGet("UserIDName")]
        public async Task<IActionResult> GetUserIdAndUserNameByRole(string role)
        {
            var users = await _unitofwork.Users.GetUserByRole(role);
            var result = users.Select(u => new {
                id = u.UserId,
                userName = u.UserName
            }).ToList();
            return Ok(result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Users tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.Users.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.Users.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.Users.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.Users.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.Users.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Users data)
        {
            var mCodeData = await _unitofwork.Users.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.UserName = data.UserName  ;
                mCodeData.Role = data.Role;
                mCodeData.Email = data.Email;
                mCodeData.Phone = data.Phone;
                _unitofwork.Users.Update(mCodeData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
