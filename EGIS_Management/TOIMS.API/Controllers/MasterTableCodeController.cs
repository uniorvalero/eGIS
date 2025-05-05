using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowCors")]
    public class MasterTableCodeController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public MasterTableCodeController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] MasterTableCode tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new MasterTableCode()
            {
                Description = tableCode.Description,
                Code = tableCode.Code,
                Createdat = DateTime.Now,
            };

            await _unitofwork.MasterCode.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.MasterCode.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.MasterCode.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.MasterCode.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.MasterCode.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id,MasterTableCode masterCode)
        {
            var mCodeData = await _unitofwork.MasterCode.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.Description = masterCode.Description;
                mCodeData.Code = masterCode.Code;
                mCodeData.Createdat = DateTime.Now;

                _unitofwork.MasterCode.Update(mCodeData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
