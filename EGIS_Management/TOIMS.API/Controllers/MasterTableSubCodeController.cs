using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Check for duplicate Subcode
                var isDuplicate = await _unitofwork.SubCode.IsSubcodeDuplicateAsync(tableSubCode.Subcode);
                if (isDuplicate)
                {
                    return BadRequest("Duplicate Subcode: A record with the same Subcode already exists.");
                }

                await _unitofwork.SubCode.CreateAsync(tableSubCode);
                await _unitofwork.CommitAsync();
                return Ok();
            }
            catch (DbUpdateException ex) when (ex.InnerException?.Message.Contains("UNIQUE") == true)
            {
                return BadRequest("Duplicate Subcode: A record with the same Subcode already exists.");
            }
        }

        [HttpGet("GetCode")]
        public async Task<IActionResult> GetCode(int code)
        {
            try
            {
                Console.WriteLine($"Received Code: {code}");
                var result = await _unitofwork.SubCode.GetDetailsByMasterCodeAsync(code); // Added 'await' here
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
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

