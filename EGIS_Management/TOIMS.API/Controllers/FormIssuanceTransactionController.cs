using Domain.Entities;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowCors")]
    public class FormIssuanceTransactionController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public FormIssuanceTransactionController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] FormIssuance data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new FormIssuance()
            {
                BookNumber = data.BookNumber,
                Quantity = data.Quantity,   
                StartReceipt = data.StartReceipt,
                EndReceipt = data.EndReceipt,
                Char = data.Char,
                Teller = data.Teller,
                FinalDate = data.FinalDate            
            };

            await _unitofwork.FormIssuance.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.FormIssuance.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.FormIssuance.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.FormIssuance.GetById(id);
            if (data != null)
            {
                await _unitofwork.FormIssuance.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, FormIssuance data)
        {
            var createDto = await _unitofwork.FormIssuance.GetById(id);

            if (createDto != null)
            {
                createDto.BookNumber = data.BookNumber;
                createDto.Quantity = data.Quantity;
                createDto.StartReceipt = data.StartReceipt;
                createDto.EndReceipt = data.EndReceipt;
                createDto.Char = data.Char;
                createDto.Teller = data.Teller;

                _unitofwork.FormIssuance.Update(createDto);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();

        }
    }
}
