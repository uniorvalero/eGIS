using Domain.Entities;
using Domain.Entities.bpltas;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class BPLTASApplicationController : Controller
    {
        private readonly IUnitOfWork _unitofwork;
        public BPLTASApplicationController(IUnitOfWork unitofwork)
        {
            _unitofwork = unitofwork;
        }

        [HttpGet("GetIds")]
        public async Task<IActionResult> GetIdsByStatus(string status)
        {
            var Ids = await _unitofwork.BPLTASApplications.GetUserNameByRoleList(status);

            return Ok(Ids);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] BPLTASApplications tableCode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new BPLTASApplications()
            {
                OwnerId = tableCode.OwnerId,
                BusinessName = tableCode.BusinessName,
                BusinessPermitNo = tableCode.BusinessPermitNo,
                Status = tableCode.Status,
                ApplicationDate = tableCode.ApplicationDate,
                ReleaseDate = tableCode.ReleaseDate
            };

            await _unitofwork.BPLTASApplications.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var mCode = await _unitofwork.BPLTASApplications.GetAllAsync();
            return Ok(mCode);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var mCodes = await _unitofwork.BPLTASApplications.GetById(id);
            return Ok(mCodes);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var mData = await _unitofwork.BPLTASApplications.GetById(id);
            if (mData != null)
            {
                await _unitofwork.BPLTASApplications.DeleteAsync(mData);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BPLTASApplications data)
        {
            var mData = await _unitofwork.BPLTASApplications.GetById(id);

            if (mData != null)
            {
                mData.OwnerId = data.OwnerId;
                mData.BusinessPermitNo = data.BusinessPermitNo;
                mData.BusinessName = data.BusinessName; 
                mData.Status = data.Status;
                mData.ApplicationDate = data.ApplicationDate;
                mData.ReleaseDate = data.ReleaseDate;

                _unitofwork.BPLTASApplications.Update(mData);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
