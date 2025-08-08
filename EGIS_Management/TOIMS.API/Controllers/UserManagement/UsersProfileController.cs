using Domain.Entities.usermanagement;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;

namespace TOIMS.API.Controllers.UserManagement
{
    [ApiController]
    [Route("api/usermanagement/[controller]")]
    public class UsersProfileController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public UsersProfileController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _unitOfWork.UsersProfile.GetAllAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _unitOfWork.UsersProfile.GetById(id);
            if (item == null) return NotFound();
            return Ok(item);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] int loginId)
        {
            Users_Profile users_Profile = new Users_Profile
            {
                UserId = 0,
                UserRoleId = 0, 
                AddressId = 0,
                LoginId = loginId, 
            };
            await _unitOfWork.UsersProfile.CreateAsync(users_Profile);
            await _unitOfWork.CommitAsync();
            return Ok(users_Profile);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Users_Profile entity)
        {
            var existing = await _unitOfWork.UsersProfile.GetById(id);
            if (existing == null) return NotFound();
            // Map properties here as needed
            _unitOfWork.UsersProfile.Update(entity);
            await _unitOfWork.CommitAsync();
            return Ok(entity);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existing = await _unitOfWork.UsersProfile.GetById(id);
            if (existing == null) return NotFound();
            await _unitOfWork.UsersProfile.DeleteAsync(existing);
            await _unitOfWork.CommitAsync();
            return Ok();
        }
    }
}
