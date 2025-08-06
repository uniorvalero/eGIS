using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersLoginRepository : GenericRepository<Users_Login>, IUsersLoginRepository
    {
        public UsersLoginRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
