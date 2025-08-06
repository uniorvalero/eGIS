using Domain.Entities.bpltas;
using Domain.Entities.rptas;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class BPLTASUserController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public BPLTASUserController(IUnitOfWork unitofwork)
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
            var users = await _unitofwork.BPLTASUsers.GetUserByRole(role);
            var result = users.Select(u => new
            {
                id = u.Id,
                name = $"{u.FirstName} {u.MiddleName} {u.LastName}".Trim()
            }).ToList();
            return Ok(result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] BPLTASUsers tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.BPLTASUsers.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.BPLTASUsers.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.BPLTASUsers.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.BPLTASUsers.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.BPLTASUsers.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BPLTASUsers data)
        {
            var mCodeData = await _unitofwork.BPLTASUsers.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.FirstName = data.FirstName;
                mCodeData.LastName = data.LastName;
                mCodeData.MiddleName = data.MiddleName;
                mCodeData.Role = data.Role;
                mCodeData.Email = data.Email;
                mCodeData.Status = data.Status;
                _unitofwork.BPLTASUsers.Update(mCodeData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
