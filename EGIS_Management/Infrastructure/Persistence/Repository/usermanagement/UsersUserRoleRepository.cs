using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersUserRoleRepository : GenericRepository<Users_UserRole>, IUsersUserRoleRepository
    {
        public UsersUserRoleRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
