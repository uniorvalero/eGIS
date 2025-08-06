using Domain.Entities.usermanagement;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserManagementController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public UserManagementController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // Create a new user with details
        [HttpPost("create-user")]
        public async Task<IActionResult> CreateUser([FromBody] Users_User user)
        {
            await _unitOfWork.UsersUser.CreateAsync(user);
            await _unitOfWork.CommitAsync();
            return Ok(user);
        }

        // Add login for a user
        [HttpPost("add-login")]
        public async Task<IActionResult> AddLogin([FromBody] Users_Login login)
        {
            await _unitOfWork.UsersLogin.CreateAsync(login);
            await _unitOfWork.CommitAsync();
            return Ok(login);
        }

        // Assign role to user
        [HttpPost("assign-role")]
        public async Task<IActionResult> AssignRole([FromBody] Users_UserRole userRole)
        {
            await _unitOfWork.UsersUserRole.CreateAsync(userRole);
            await _unitOfWork.CommitAsync();
            return Ok(userRole);
        }

        // Assign app subscription to user
        [HttpPost("assign-app")]
        public async Task<IActionResult> AssignApp([FromBody] Users_AppSubcription appSub)
        {
            await _unitOfWork.UsersAppSubcription.CreateAsync(appSub);
            await _unitOfWork.CommitAsync();
            return Ok(appSub);
        }

        // Assign menu to role
        [HttpPost("assign-menu")]
        public async Task<IActionResult> AssignMenu([FromBody] Users_RoleMenu roleMenu)
        {
            await _unitOfWork.UsersRoleMenu.CreateAsync(roleMenu);
            await _unitOfWork.CommitAsync();
            return Ok(roleMenu);
        }
    }
}
