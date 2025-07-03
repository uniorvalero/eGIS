using Domain.Entities.rptas;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace rptasfaas.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public PaymentController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Payments tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.Payments.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.Payments.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.Payments.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.Payments.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.Payments.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Payments data)
        {
            var mCodeData = await _unitofwork.Payments.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.TaxId = data.TaxId;
                mCodeData.PayerId = data.PayerId;
                mCodeData.PaymentDate = data.PaymentDate;
                mCodeData.AmountPaid = data.AmountPaid;
                mCodeData.PaymentMethod = data.PaymentMethod;
                mCodeData.ReceiptNo = data.ReceiptNo;
                mCodeData.VerifiedBy = data.VerifiedBy;

                _unitofwork.Payments.Update(mCodeData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
