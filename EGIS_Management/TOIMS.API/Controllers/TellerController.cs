using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowCors")]
    public class TellerController : Controller
    {
        private readonly IUnitOfWork _unitofwork;

        public TellerController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Teller teller)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new Teller()
            {
               Code = teller.Code,  
               Designation = teller.Designation,
               Name = teller.Name,
               CreatedAt = teller.CreatedAt,   
               UserId= teller.UserId,
            };

            await _unitofwork.Teller.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.Teller.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.Teller.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.Teller.GetById(id);
            if (data != null)
            {
                await _unitofwork.Teller.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Teller teller)
        {
            var data = await _unitofwork.Teller.GetById(id);

            if (data != null)
            {
                data.Designation = teller.Designation;
                data.Name = teller.Name;
                data.UserId = teller.UserId;    
                data.Code = teller.Code;    
             
                _unitofwork.Teller.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
