using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersAppRepository : GenericRepository<Users_App>, IUsersAppRepository
    {
        public UsersAppRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
