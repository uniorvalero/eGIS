using Microsoft.AspNetCore.Mvc;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.EntityFrameworkCore;

namespace TOIMS.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class OfficialReceiptController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public OfficialReceiptController(IUnitOfWork unitofwork)
        {
            _unitOfWork = unitofwork;
        }

        // Setup of Date and Form
        [HttpGet("ByDateAndForm")]
        public async Task<IActionResult> GetReceiptsByDateAndForm(DateTime date, string formCode)
        {
            var receipts = await _unitOfWork.OfficialReceipt.GetAllAsync();
            var filteredReceipts = receipts.Where(r => r.DateIssued.Date == date.Date && r.FormCode == formCode).ToList();

            return Ok(filteredReceipts);
        }

        // Add a New Receipt
        [HttpPost("Add")]
        public async Task<IActionResult> AddReceipt([FromBody] OfficialReceipt receipt)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _unitOfWork.OfficialReceipt.CreateAsync(receipt);
            await _unitOfWork.CommitAsync();

            return CreatedAtAction(nameof(GetReceiptsByDateAndForm), new { date = receipt.DateIssued, formCode = receipt.FormCode }, receipt);
        }

        // Edit an Existing Receipt
        [HttpPut("Edit/{id}")]
        public async Task<IActionResult> EditReceipt(int id, [FromBody] OfficialReceipt updatedReceipt)
        {
            var receipt = await _unitOfWork.OfficialReceipt.GetByIdAsync(id);
            if (receipt == null)
                return NotFound();

            receipt.Payor = updatedReceipt.Payor;
            receipt.Particular = updatedReceipt.Particular;
            receipt.Remarks = updatedReceipt.Remarks;

            await _unitOfWork.CommitAsync();

            return NoContent();
        }

        // Add Details to a Receipt
        [HttpPost("AddDetails/{receiptId}")]
        public async Task<IActionResult> AddDetailsToReceipt(int receiptId, [FromBody] OfficialReceiptDetail detail)
        {
            var receipt = await _unitOfWork.OfficialReceipt.GetByIdAsync(receiptId);
            if (receipt == null)
                return NotFound();

            detail.OfficialReceiptId = receiptId;
            await _unitOfWork.OfficialReceiptDetail.CreateAsync(detail);
            await _unitOfWork.CommitAsync();

            return Ok(detail);
        }

        [HttpPut("EditDetails/{detailId}")]
        public async Task<IActionResult> EditDetailsOfReceipt(int detailId, [FromBody] OfficialReceiptDetail updatedDetail)
        {
            var detail = await _unitOfWork.OfficialReceiptDetail.GetById(detailId); // Corrected method name
            if (detail == null)
                return NotFound();

            detail.Amount = updatedDetail.Amount; // Only update the amount
            await _unitOfWork.CommitAsync();

            return NoContent();
        }

        // Delete Details of a Receipt
        [HttpDelete("DeleteDetails/{detailId}")]
        public async Task<IActionResult> DeleteDetailsOfReceipt(int detailId)
        {
            var detail = await _unitOfWork.OfficialReceiptDetail.GetById(detailId); // Corrected method name
            if (detail == null)
                return NotFound();

            await _unitOfWork.OfficialReceiptDetail.DeleteAsync(detail);
            await _unitOfWork.CommitAsync();

            return NoContent();
        }

        // Delete a Receipt
        [HttpDelete("Delete/{receiptId}")]
        public async Task<IActionResult> DeleteReceipt(int receiptId)
        {
            var receipt = await _unitOfWork.OfficialReceipt.GetByIdAsync(receiptId);
            if (receipt == null)
                return NotFound();

            // Delete all details first
            var details = await _unitOfWork.OfficialReceiptDetail.GetAllAsync();
            var receiptDetails = details.Where(d => d.OfficialReceiptId == receiptId).ToList();
            foreach (var detail in receiptDetails)
            {
                await _unitOfWork.OfficialReceiptDetail.DeleteAsync(detail);
            }

            // Delete the receipt
            await _unitOfWork.OfficialReceipt.DeleteAsync(receipt);
            await _unitOfWork.CommitAsync();

            return NoContent();
        }
    }
}
