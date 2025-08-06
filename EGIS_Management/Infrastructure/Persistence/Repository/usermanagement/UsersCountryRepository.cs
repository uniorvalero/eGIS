using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersCountryRepository : GenericRepository<Users_Country>, IUsersCountryRepository
    {
        public UsersCountryRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
