using Domain.Entities.usermanagement;
using Infrastructure.Persistence.Repository;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public interface IUsersOtpTokenRepository : IGenericRepository<Users_OtpToken> { }
}
