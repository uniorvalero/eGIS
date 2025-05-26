using Microsoft.AspNetCore.Mvc;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace TOIMS.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class OfficialReceiptController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public OfficialReceiptController(IUnitOfWork unitofwork)
        {
            _unitOfWork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] OfficialReceipt tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new OfficialReceipt()
            {
                ReceiptNumber = tableCode.ReceiptNumber,
                Char = tableCode.Char,
                Payor = tableCode.Payor,
                DateIssue = tableCode.DateIssue,
            };
            
            await _unitOfWork.OfficialReceipt.CreateAsync(createDTO);
            await _unitOfWork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitOfWork.OfficialReceipt.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitOfWork.OfficialReceipt.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitOfWork.OfficialReceipt.GetById(id);
            if (mCodeData != null)
            {
                await _unitOfWork.OfficialReceipt.DeleteAsync(mCodeData);
                await _unitOfWork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, OfficialReceipt ORtb)
        {
            var orData = await _unitOfWork.OfficialReceipt.GetById(id);

            if (orData != null)
            {
                orData.Char = ORtb.Char;
                orData.Payor = ORtb.Payor;
                orData.DateIssue = ORtb.DateIssue;
                _unitOfWork.OfficialReceipt.Update(orData);

                await _unitOfWork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("getSetup")]
        public async Task<IActionResult> GetAllSetUp(DateOnly from, DateOnly to, int subcode)
        {
            var orData = await _unitOfWork.OfficialReceipt.GetAllByDateAndForm(from, to, subcode);
            return Ok(orData);
        }

        [HttpGet("getUtility")]
        public async Task<IActionResult> GetAllUtility(int startingRange, int endRange, string character, int subcode)
        {
            var orData = await _unitOfWork.OfficialReceipt.GetAllByRangeDateAndForm(subcode, startingRange, endRange, character);
            return Ok(orData);
        }

        [HttpGet("GetFormCodeByMasterCode")]
        public async Task<IActionResult> GetCode(int code)
        {
            try
            {
                var result = await _unitOfWork.SubCode.GetDetailsByMasterCodeAsync(code);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
