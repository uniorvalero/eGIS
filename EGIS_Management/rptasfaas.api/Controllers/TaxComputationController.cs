using Domain.Entities.rptas;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations.Schema;

namespace rptasfaas.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaxComputationController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public TaxComputationController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] TaxComputations tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.TaxComputations.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.TaxComputations.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("GetTaxByPaymentId")]
        public async Task<IActionResult> GetTaxByPaymentId(int Id)
        {
            var mCode = await _unitofwork.TaxComputations.GetTaxByPaymentId(Id);
            return Ok(mCode);
        }

        [HttpGet("GellAllTaxId")]
        public async Task<IActionResult> GetAllApprovedTaxId(string status)
        {
            var mCode = await _unitofwork.TaxComputations.GetAllTaxIDByStatus(status);
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.TaxComputations.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.TaxComputations.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.TaxComputations.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TaxComputations data)
        {
            var mCodeData = await _unitofwork.TaxComputations.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.Id = data.Id;
                mCodeData.AssessmentId = data.AssessmentId;
                mCodeData.TaxYear = data.TaxYear;
                mCodeData.BasicTax = data.BasicTax;
                mCodeData.SefTax = data.SefTax;
                mCodeData.IdleLandTax = data.IdleLandTax;
                mCodeData.TotalDue = data.TotalDue;
                mCodeData.Discount = data.Discount;
                mCodeData.Penalty = data.Penalty;
                mCodeData.FinalAmount = data.FinalAmount;
                mCodeData.Status = data.Status;

                _unitofwork.TaxComputations.Update(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
