using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class ManagigTemplateController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public ManagigTemplateController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] ManagingTemplate template)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new ManagingTemplate()
            {
                Code = template.Code,
                Description = template.Description,
                Amount = template.Amount,
                Name= template.Name,    
                CreatedAt = DateTime.Now,
                
            };

            await _unitofwork.ManagingTemplate.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.ManagingTemplate.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.ManagingTemplate.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.ManagingTemplate.GetById(id);
            if (data != null)
            {
                await _unitofwork.ManagingTemplate.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, ManagingTemplate template)
        {
            var data = await _unitofwork.ManagingTemplate.GetById(id);

            if (data != null)
            {
                data.Description = template.Description;
                data.Name = template.Name;  
                data.Amount = template.Amount;  
                data.Code = template.Code;  

                _unitofwork.ManagingTemplate.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
