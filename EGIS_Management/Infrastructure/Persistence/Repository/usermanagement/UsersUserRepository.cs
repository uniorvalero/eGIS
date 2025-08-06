using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersUserRepository : GenericRepository<Users_User>, IUsersUserRepository
    {
        public UsersUserRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
