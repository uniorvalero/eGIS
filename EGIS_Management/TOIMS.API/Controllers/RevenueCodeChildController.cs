using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowCors")]
    public class RevenueCodeChildController : Controller
    {
        private readonly IUnitOfWork _unitofwork;

        public RevenueCodeChildController(IUnitOfWork unitofwork)
        {
              _unitofwork = unitofwork;  
        }


        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] RevenueCodeChild revenueChild)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new RevenueCodeChild()
            {
                Code = revenueChild.Code,    
                Amount = revenueChild.Amount,
                Description = revenueChild.Description,
                CreatedAt = DateTime.UtcNow
            };

            await _unitofwork.RevenueCodeChild.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]

        [HttpGet("GetCode")]
        public async Task<IActionResult> GetCode(string code)
        {
            try
            {
                var result = await _unitofwork.RevenueCodeChild.GetDetailsByRevenueCodeAsync(code); // Added 'await' here
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
        //public async Task<IActionResult> GetAll()
        //{
        //    var data = await _unitofwork.RevenueCodeChild.GetAllAsync();
        //    return Ok(data);
        //}

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.RevenueCodeChild.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.RevenueCodeChild.GetById(id);
            if (data != null)
            {
                await _unitofwork.RevenueCodeChild.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, RevenueCodeChild revenueChild)
        {
            var data = await _unitofwork.RevenueCodeChild.GetById(id);

            if (data != null)
            {
                data.Description = revenueChild.Description;
                data.Amount = revenueChild.Amount;
                data.Code =revenueChild.Code;
                data.CreatedAt = revenueChild.CreatedAt;

                _unitofwork.RevenueCodeChild.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();

        }
    }
}

