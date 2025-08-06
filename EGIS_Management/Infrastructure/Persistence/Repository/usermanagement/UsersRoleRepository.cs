using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersRoleRepository : GenericRepository<Users_Role>, IUsersRoleRepository
    {
        public UsersRoleRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
