﻿using Domain.Entities;
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
        public async Task<IActionResult> GetReceiptNumber(int orID)
        {
            try
            {
                var result = await _unitofwork.OfficialReceiptDetail.GetDetailsByORIdAsync(orID); 
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

        [HttpPut("CancelByReceiptNumber/{receiptNumber}")]
        public async Task<IActionResult> Cancel(int receiptNumber)
        {
            var details = await _unitofwork.OfficialReceiptDetail.GetDetailsByORIdAsync(receiptNumber);

            if (details == null || !details.Any())
                return NotFound("No records found for the given ReceiptNumber.");

            foreach (var detail in details)
            {
                detail.Code = "0-000-00-0000";
                detail.Description = "Cancelled Receipt";
                _unitofwork.OfficialReceiptDetail.Update(detail);
            }

            await _unitofwork.CommitAsync();
            return Ok("All records with the given ReceiptNumber have been cancelled.");
        }
    }
}
