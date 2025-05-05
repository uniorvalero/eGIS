using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowCors")]
    public class RevenueCodeParentController : Controller
    {
        private readonly IUnitOfWork _unitofwork;

        public RevenueCodeParentController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }


        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] RevenueCodeParent revenueParent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new RevenueCodeParent()
            {
                Code = revenueParent.Code,
                Description = revenueParent.Description,
                Kind = revenueParent.Kind,
                SeqNo = revenueParent.SeqNo,
                CreatedAt = DateTime.UtcNow
            };

            await _unitofwork.RevenueCodeParent.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.RevenueCodeParent.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.RevenueCodeParent.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.RevenueCodeParent.GetById(id);
            if (data != null)
            {
                await _unitofwork.RevenueCodeParent.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, RevenueCodeParent revenueParent)
        {
            var data = await _unitofwork.RevenueCodeParent.GetById(id);

            if (data != null)
            {
                data.Description = revenueParent.Description;
                data.Code = revenueParent.Code;
                data.Kind = revenueParent.Kind;
                data.SeqNo = revenueParent.SeqNo;

                _unitofwork.RevenueCodeParent.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();

        }
    }
 }
