using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersAppSubcriptionRepository : GenericRepository<Users_AppSubcription>, IUsersAppSubcriptionRepository
    {
        public UsersAppSubcriptionRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
