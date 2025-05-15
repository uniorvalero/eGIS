using Domain.Entities;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OfficialReceiptDetailController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public OfficialReceiptDetailController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(OfficialReceiptDetail tbOR)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Check for duplicate Subcode
                var isDuplicate = await _unitofwork.OfficialReceiptDetail.IsCodeDuplicateAsync(tbOR.Code);
                if (isDuplicate)
                {
                    return BadRequest("Duplicate Code: A record with the same Subcode already exists.");
                }

                await _unitofwork.OfficialReceiptDetail.CreateAsync(tbOR);
                await _unitofwork.CommitAsync();
                return Ok();
            }
            catch (DbUpdateException ex) when (ex.InnerException?.Message.Contains("UNIQUE") == true)
            {
                return BadRequest("Duplicate Code: A record with the same Subcode already exists.");
            }
        }

        [HttpGet("GetReceiptNumber")]
        public async Task<IActionResult> GetORID(int orID)
        {
            try
            {
                Console.WriteLine($"Received OR ID: {orID}");
                var result = await _unitofwork.OfficialReceiptDetail.GetDetailsByORIdAsync(orID); // Added 'await' here
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
            var mCode = await _unitofwork.OfficialReceiptDetail.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.OfficialReceiptDetail.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.OfficialReceiptDetail.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.OfficialReceiptDetail.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, OfficialReceiptDetail orDetail)
        {
            var mSubCodeData = await _unitofwork.OfficialReceiptDetail.GetById(id);

            if (mSubCodeData != null)
            {
                mSubCodeData.ReceiptNumber = orDetail.ReceiptNumber;
                mSubCodeData.Code = orDetail.Code;
                mSubCodeData.Description = orDetail.Description;
                mSubCodeData.Amount = orDetail.Amount;
                return Ok();
            }
            return BadRequest();
        }
    }
}
