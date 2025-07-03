using Domain.Entities;
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

        [HttpGet("GetViews")]
        public async Task<IActionResult> GetViews(int month, int year)
        {
            var orData = await _unitOfWork.CollectionSummary.GetAllByMonthAndYear(month, year);
            return Ok(orData);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] CollectionSummary tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new CollectionSummary()
            {
                Code = tableCode.Code,
                Description = tableCode.Description
            };

            await _unitOfWork.CollectionSummary.CreateAsync(createDTO);
            await _unitOfWork.CommitAsync();
            return Ok();
        }
    }
}
