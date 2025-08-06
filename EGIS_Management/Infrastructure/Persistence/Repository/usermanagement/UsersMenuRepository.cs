using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersMenuRepository : GenericRepository<Users_Menu>, IUsersMenuRepository
    {
        public UsersMenuRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
