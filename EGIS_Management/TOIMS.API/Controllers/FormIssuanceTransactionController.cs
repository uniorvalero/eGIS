using Domain.Entities;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                //Check for duplicate Subcode

                var isDuplicate = await _unitofwork.FormIssuance.IsCodeDuplicateAsync(data.BookNumber);
                if (isDuplicate)
                {
                    return BadRequest("Duplicate Code: A record with the same BookNumber already exists.");
                }

                await _unitofwork.FormIssuance.CreateAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }
            catch (DbUpdateException ex) when (ex.InnerException?.Message.Contains("UNIQUE") == true)
            {
                return BadRequest("Duplicate Code: A record with the same BookNumber already exists.");
            }
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

                _unitofwork.FormIssuance.Update(createDto);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();

        }
    }
}
