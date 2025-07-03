using Domain.Entities.rptas;
using Domain.Entities.toims;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations.Schema;

namespace RPTASFAASS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertyController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public PropertyController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpGet("GetTaxDeclaration")]
        public async Task<IActionResult> GetTaxDeclaration()
        {
            var users = await _unitofwork.Properties.GetTaxDeclarationList();

            return Ok(users);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Properties tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _unitofwork.Properties.CreateAsync(tableCode);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.Properties.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.Properties.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mCodeData = await _unitofwork.Properties.GetById(id);
            if (mCodeData != null)
            {
                await _unitofwork.Properties.DeleteAsync(mCodeData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Properties data)
        {
            var mCodeData = await _unitofwork.Properties.GetById(id);

            if (mCodeData != null)
            {
                mCodeData.OwnerId = data.OwnerId;
                mCodeData.TaxDeclarationNo = data.TaxDeclarationNo;
                mCodeData.OwnerId = data.OwnerId;
                mCodeData.TitleNo = data.TitleNo;
                mCodeData.Classification = data.Classification;
                mCodeData.Location = data.Location;
                mCodeData.LandArea = data.LandArea;
                mCodeData.PropertyStatus = data.PropertyStatus;
                _unitofwork.Properties.Update(mCodeData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
