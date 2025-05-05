using Microsoft.AspNetCore.Mvc;
using Domain.Entities;
using Domain.Entities.bpltas;
using Infrastructure.Persistence.Repository;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class CollectionCodeController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public CollectionCodeController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] CollectionCode collectionCode) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new CollectionCode()
            {
             Code = collectionCode.Code,
             CreatedAt = DateTime.UtcNow,
             Description = collectionCode.Description,
            };
            await _unitofwork.CollectionCode.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.CollectionCode.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.CollectionCode.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.CollectionCode.GetById(id);
            if (data != null)
            {
                await _unitofwork.CollectionCode.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, CollectionCode collectionCode)
        {
            var data = await _unitofwork.CollectionCode.GetById(id);

            if (data != null)
            {
             data.Code = collectionCode.Code;
             data.Description = collectionCode.Description;
             data.CreatedAt = DateTime.Now;

                _unitofwork.CollectionCode.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
