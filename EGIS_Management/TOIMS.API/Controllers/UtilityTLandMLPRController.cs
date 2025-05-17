using Domain.Entities.toims;
using Domain.Entities.Utility;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class UtilityTLandMLPRController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public UtilityTLandMLPRController(IUnitOfWork unitofwork)
        {
            _unitOfWork = unitofwork;
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
                orData.DateIssue = DateTime.Now;
                _unitOfWork.OfficialReceipt.Update(orData);

                await _unitOfWork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("PassToSubCode")]
        public IActionResult PassToSubCode(int masterCode, string description)
        {
            if (masterCode <= 0 || string.IsNullOrWhiteSpace(description))
            {
                return BadRequest("Invalid MasterCode or Description.");
            }

            return RedirectToAction(
                actionName: "DisplayMasterCodeDetails",
                controllerName: "MasterTableSubCode",
                routeValues: new { masterCode, description }
            );
        }
    }
}
