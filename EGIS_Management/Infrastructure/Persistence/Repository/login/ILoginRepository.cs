using Domain.Entities.usermanagement;

namespace Infrastructure.Persistence.Repository.login
{
    public interface ILoginRepository : IGenericRepository<Users_Login>
    {
        Task<Users_Login> GetByEmail(string email);
    }
}