using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersCityRepository : GenericRepository<Users_City>, IUsersCityRepository
    {
        public UsersCityRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
