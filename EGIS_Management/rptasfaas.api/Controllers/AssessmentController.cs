using Domain.Entities.rptas;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace rptasfaas.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AssessmentController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public AssessmentController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(Assessments data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.Assessments.CreateAsync(data);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.Assessments.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.Assessments.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.Assessments.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.Assessments.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Assessments data)
        {
            var mCodeData = await _unitofwork.Assessments.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.AssessmentId = data.AssessmentId;
                mCodeData.AssessmentDate = data.AssessmentDate;
                mCodeData.AssessedValue = data.AssessedValue;

                _unitofwork.Assessments.Update(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
