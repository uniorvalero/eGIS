using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class CollectionSummaryDetailsController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public CollectionSummaryDetailsController(IUnitOfWork unitofwork)
        {
            _unitOfWork = unitofwork;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("getDetails")]
        public async Task<IActionResult> GetDetails(string code)
        {
            var orData = await _unitOfWork.CollectionSummaryDetails.GetAllDetails(code);
            return Ok(orData);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitOfWork.CollectionSummaryDetails.GetById(id);
            if (mCodeData != null)
            {
                await _unitOfWork.CollectionSummaryDetails.DeleteAsync(mCodeData);
                await _unitOfWork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }
    }
}
