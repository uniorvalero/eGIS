using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class EstimatedRevenueController : Controller
    {
        private readonly IUnitOfWork _unitofwork;

        public EstimatedRevenueController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] EstimatedRevenue erevenue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new EstimatedRevenue()
            {
               Code = erevenue.Code,
               Description= erevenue.Description,
               Amount = erevenue.Amount,
               SetupYear= erevenue.SetupYear,
            };

            await _unitofwork.EstimatedRevenue.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }   

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.EstimatedRevenue.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.EstimatedRevenue.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.EstimatedRevenue.GetById(id);
            if (data != null)
            {
                await _unitofwork.EstimatedRevenue.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, EstimatedRevenue erevenue)
        {
            var data = await _unitofwork.EstimatedRevenue.GetById(id);

            if (data != null)
            {
                data.Code= erevenue.Code;   
                data.Description= erevenue.Description;
                data.Amount= erevenue.Amount;
                data.SetupYear= erevenue.SetupYear;

                _unitofwork.EstimatedRevenue.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
