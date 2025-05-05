using Microsoft.AspNetCore.Mvc;
using Domain.Entities;
using Domain.Entities.bpltas;
using Infrastructure.Persistence.Repository;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class BankController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public BankController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Bank bank) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new Bank()
            {
              Address = bank.Address,
              BankCode = bank.BankCode,
              BankName = bank.BankName,
              Branch = bank.Branch,
              ContactName = bank.ContactName,
              ContactNo = bank.ContactNo,
              CreatedAt = DateTime.UtcNow,
            };
            await _unitofwork.Bank.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.Bank.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.Bank.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.Bank.GetById(id);
            if (data != null)
            {
                await _unitofwork.Bank.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Bank bank)
        {
            var data = await _unitofwork.Bank.GetById(id);

            if (data != null)
            {
                data.Address = bank.Address;
                data.BankName = bank.BankName;
                data.Branch = bank.Branch;
                data.BankName = bank.BankName;
                data.BankCode = bank.BankCode;
                data.ContactName = bank.ContactName;
                data.ContactNo = bank.ContactNo;
                data.CreatedAt = bank.CreatedAt;

                _unitofwork.Bank.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
