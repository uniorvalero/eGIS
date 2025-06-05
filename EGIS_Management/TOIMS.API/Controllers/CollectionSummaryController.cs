using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class CollectionSummaryController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public CollectionSummaryController(IUnitOfWork unitofwork)
        {
            _unitOfWork = unitofwork;
        }

        [HttpGet("getViews")]
        public async Task<IActionResult> GetViews(int month, int year)
        {
            var orData = await _unitOfWork.CollectionSummary.GetAllByMonthAndYear(month, year);
            return Ok(orData);
        }
    }
}
