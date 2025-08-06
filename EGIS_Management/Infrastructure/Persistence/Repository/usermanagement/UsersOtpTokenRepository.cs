using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersOtpTokenRepository : GenericRepository<Users_OtpToken>, IUsersOtpTokenRepository
    {
        public UsersOtpTokenRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
