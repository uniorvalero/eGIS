using Domain.Entities;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace bpltas.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class BarangayController : Controller
    {
        private readonly IUnitOfWork _unitofwork;

        public BarangayController(IUnitOfWork unitofwork) 
        {
            _unitofwork = unitofwork;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody]Barangay barangay) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createDTO = new Barangay()
            {
              Baranggay = barangay.Baranggay,
              BaranggayCode = barangay.BaranggayCode,
              ContactName = barangay.ContactName,
              ContactNo = barangay.ContactNo,
              CreatedAt = DateTime.Now,
              District = barangay.District,
              Remarks = barangay.Remarks,
              Zone = barangay.Zone,
            };

            await _unitofwork.Barangay.CreateAsync(createDTO);
            await _unitofwork.CommitAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _unitofwork.Barangay.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyId(int id)
        {
            var data = await _unitofwork.Barangay.GetById(id);
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _unitofwork.Barangay.GetById(id);
            if (data != null)
            {
                await _unitofwork.Barangay.DeleteAsync(data);
                await _unitofwork.CommitAsync();
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Barangay barangay)
        {
            var data = await _unitofwork.Barangay.GetById(id);

            if (data != null)
            {
                data.District = barangay.District;
                data.ContactNo = barangay.ContactNo;
                data.Remarks = barangay.Remarks;
                data.ContactName = barangay.ContactName;
                data.Baranggay = barangay.Baranggay;
                data.BaranggayCode = barangay.Baranggay;

                _unitofwork.Barangay.Update(data);

                await _unitofwork.CommitAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
