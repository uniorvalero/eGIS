using Domain.Entities;
using Domain.Entities.bpltas;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class BPLTASPaymentController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public BPLTASPaymentController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] BPLTASPayments tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new BPLTASPayments()
            {
                ApplicationId = tableCode.ApplicationId,
                ReceiptNo = tableCode.ReceiptNo,
                TypesOfPayment = tableCode.TypesOfPayment,
                Amount = tableCode.Amount,
                Status = tableCode.Status,
                PaymentDate = tableCode.PaymentDate
            };

            await _unitofwork.BPLTASPayments.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.BPLTASPayments.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.BPLTASPayments.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.BPLTASPayments.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.BPLTASPayments.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BPLTASPayments data)
        {
            var mCodeData = await _unitofwork.BPLTASPayments.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.ApplicationId = data.ApplicationId;
                mCodeData.ReceiptNo = data.ReceiptNo;
                mCodeData.TypesOfPayment = data.TypesOfPayment;
                mCodeData.Amount = data.Amount;
                mCodeData.Status = data.Status;
                mCodeData.PaymentDate = data.PaymentDate;
                
                _unitofwork.BPLTASPayments.Update(mCodeData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
