using Domain.Entities;
using Domain.Entities.bpltas;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class BillingController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public BillingController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Billing billing) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new Billing()
            {
             Description = billing.Description,
             Discount = billing.Discount,
             BusinessPermitId = billing.BusinessPermitId,
             NetDue = billing.NetDue,
             Penalty = billing.Penalty,
             Period = billing.Period,
             TaxDue = billing.TaxDue,
             TotalDue = billing.TotalDue,
             Year = billing.Year,
            };
            await _unitofwork.Billing.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.Billing.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.Billing.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.Billing.GetById(id);
            if (data != null)
            {
                await _unitofwork.Billing.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Billing billing)
        {
            var data = await _unitofwork.Billing.GetById(id);

            if (data != null)
            {
                data.TaxDue = billing.TaxDue;
                data.NetDue = billing.NetDue;
                data.TotalDue = billing.TotalDue;
                data.Period = billing.Period;
                data.Description = billing.Description;
                data.Year = billing.Year;
                data.Discount = billing.Discount;
                data.BusinessPermitId = billing.BusinessPermitId;

                _unitofwork.Billing.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}

