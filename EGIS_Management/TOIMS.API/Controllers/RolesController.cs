using Domain.Entities.usermanagement;
using Infrastructure.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;

namespace TOIMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RolesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public RolesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // Assign a role to a user
        [HttpPost("assign-role")]
        public async Task<IActionResult> AssignRoleToUser(int userId, int roleId)
        {
            var userRole = new Users_UserRole { UserId = userId, RoleId = roleId };
            await _unitOfWork.UsersUserRole.CreateAsync(userRole);
            await _unitOfWork.CommitAsync();
            return Ok("Role assigned to user.");
        }

        // Assign a menu to a role
        [HttpPost("assign-menu")]
        public async Task<IActionResult> AssignMenuToRole(int roleId, int menuId)
        {
            var roleMenu = new Users_RoleMenu { RoleId = roleId, MenuId = menuId };
            await _unitOfWork.UsersRoleMenu.CreateAsync(roleMenu);
            await _unitOfWork.CommitAsync();
            return Ok("Menu assigned to role.");
        }

        // Get all roles for a user
        [HttpGet("user-roles/{userId}")]
        public async Task<IActionResult> GetUserRoles(int userId)
        {
            var roles = (await _unitOfWork.UsersUserRole.GetAllAsync())
                .Where(ur => ur.UserId == userId)
                .Select(ur => ur.RoleId);
            return Ok(roles);
        }

        // Get all menus for a role
        [HttpGet("role-menus/{roleId}")]
        public async Task<IActionResult> GetRoleMenus(int roleId)
        {
            var menus = (await _unitOfWork.UsersRoleMenu.GetAllAsync())
                .Where(rm => rm.RoleId == roleId)
                .Select(rm => rm.MenuId);
            return Ok(menus);
        }

        // Check if a user has permission for a menu
        [HttpGet("check-permission")]
        public async Task<IActionResult> CheckUserMenuPermission(int userId, string menuName)
        {
            var userRoles = (await _unitOfWork.UsersUserRole.GetAllAsync())
                .Where(ur => ur.UserId == userId)
                .Select(ur => ur.RoleId);
            var menu = (await _unitOfWork.UsersMenu.GetAllAsync())
                .FirstOrDefault(m => m.MenuName == menuName);
            if (menu == null) return NotFound("Menu not found.");
            var hasPermission = (await _unitOfWork.UsersRoleMenu.GetAllAsync())
                .Any(rm => userRoles.Contains(rm.RoleId) && rm.MenuId == menu.Id);
            return Ok(new { HasPermission = hasPermission });
        }
    }
}
