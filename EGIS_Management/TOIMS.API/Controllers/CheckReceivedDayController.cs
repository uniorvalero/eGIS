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
    public class CheckReceivedDayController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public CheckReceivedDayController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] CheckReceivedDay tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.CheckReceivedDay.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.CheckReceivedDay.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.CheckReceivedDay.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.CheckReceivedDay.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.CheckReceivedDay.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, CheckReceivedDay data)
        {
            var mCodeData = await _unitofwork.CheckReceivedDay.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.BankNumber = data.BankNumber;
                mCodeData.BankName = data.BankName;
                mCodeData.CheckNumber = data.CheckNumber;
                mCodeData.CheckAmount = data.CheckAmount;
                mCodeData.CheckDate = data.CheckDate;
                _unitofwork.CheckReceivedDay.Update(mCodeData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
