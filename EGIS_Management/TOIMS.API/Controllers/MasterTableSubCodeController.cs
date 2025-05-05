using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MasterTableSubCodeController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public MasterTableSubCodeController(IUnitOfWork unitofwork)
        {
               _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(MasterTableSubCode tableSubCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.SubCode.CreateAsync(tableSubCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.SubCode.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.SubCode.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.SubCode.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.SubCode.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, MasterTableSubCode masterSubCode)
        {
            var mSubCodeData = await _unitofwork.SubCode.GetById(id);

            if (mSubCodeData != null)
            {
                mSubCodeData.Description = masterSubCode.Description;
                mSubCodeData.Subcode= masterSubCode.Subcode;
                mSubCodeData.Code = masterSubCode.Code;
                mSubCodeData.CreatedAt = masterSubCode.CreatedAt;
              
                return Ok();
            }
            return BadRequest();
        }

    }
}

