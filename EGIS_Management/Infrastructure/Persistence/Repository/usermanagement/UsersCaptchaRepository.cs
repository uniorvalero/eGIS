using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersCaptchaRepository : GenericRepository<Users_Captcha>, IUsersCaptchaRepository
    {
        public UsersCaptchaRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
