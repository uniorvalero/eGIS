using Domain.Entities.bpltas;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class BPLTASInspectionController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public BPLTASInspectionController(IUnitOfWork unitofwork)
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
        public async Task<IActionResult> Create([FromBody] BPLTASInspections tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.BPLTASInspections.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.BPLTASInspections.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.BPLTASInspections.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.BPLTASInspections.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.BPLTASInspections.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BPLTASInspections data)
        {
            var mdata = await _unitofwork.BPLTASInspections.GetById(id);

            if (mdata != null)
            {
                mdata.ApplicationId = data.ApplicationId;
                mdata.InspectorId = data.InspectorId;
                mdata.InspectionResult = data.InspectionResult;
                mdata.InspectionStatus = data.InspectionStatus;
                mdata.InspectionDate = data.InspectionDate;
                mdata.Remarks = data.Remarks;

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
