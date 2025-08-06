using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersRoleMenuRepository : GenericRepository<Users_RoleMenu>, IUsersRoleMenuRepository
    {
        public UsersRoleMenuRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
