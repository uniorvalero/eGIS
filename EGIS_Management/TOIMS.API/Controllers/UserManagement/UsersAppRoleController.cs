using Domain.Entities.usermanagement;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;

namespace TOIMS.API.Controllers.UserManagement
{
    [ApiController]
    [Route("api/usermanagement/[controller]")]
    public class UsersAppRoleController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public UsersAppRoleController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _unitOfWork.UsersAppRole.GetAllAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _unitOfWork.UsersAppRole.GetById(id);
            if (item == null) return NotFound();
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Users_AppRoles entity)
        {
            await _unitOfWork.UsersAppRole.CreateAsync(entity);
            await _unitOfWork.CommitAsync();
            return Ok(entity);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Users_AppRoles entity)
        {
            var existing = await _unitOfWork.UsersAppRole.GetById(id);
            if (existing == null) return NotFound();
            // Map properties here as needed
            _unitOfWork.UsersAppRole.Update(entity);
            await _unitOfWork.CommitAsync();
            return Ok(entity);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existing = await _unitOfWork.UsersAppRole.GetById(id);
            if (existing == null) return NotFound();
            await _unitOfWork.UsersAppRole.DeleteAsync(existing);
            await _unitOfWork.CommitAsync();
            return Ok();
        }
    }
}
