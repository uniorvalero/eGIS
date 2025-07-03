using Domain.Entities.rptas;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class UtilityRPTASController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public UtilityRPTASController(IUnitOfWork unitofwork)
        {
            _unitOfWork = unitofwork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitOfWork.Payments.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("ReceiptRange")]
        public async Task<IActionResult> GetAllByReceiptRange(int start, int end)
        {
            var mCode = await _unitOfWork.Payments.GetAllByReceiptRange(start, end);
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitOfWork.OfficialReceipt.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitOfWork.OfficialReceipt.GetById(id);
            if (mCodeData != null)
            {
                await _unitOfWork.OfficialReceipt.DeleteAsync(mCodeData);
                await _unitOfWork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        //single update: PUT /Payment/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePayment(int id, [FromBody] Payments payment)
        {
            if (id != payment.Id)
                return BadRequest("ID mismatch.");

            var result = await _unitOfWork.Payments.UpdatePaymentAsync(payment);
            if (!result)
                return NotFound();

            return NoContent();
        }

        // Batch update: PUT /Payment/BatchUpdate
        [HttpPut("BatchUpdate")]
        public async Task<IActionResult> BatchUpdatePayments([FromBody] List<Payments> payments)
        {
            if (payments == null || payments.Count == 0)
                return BadRequest("The payments list cannot be null or empty.");

            var result = await _unitOfWork.Payments.BatchUpdatePaymentsAsync(payments);

            if (!result)
                return NotFound();

            return NoContent();
        }
    }
}
