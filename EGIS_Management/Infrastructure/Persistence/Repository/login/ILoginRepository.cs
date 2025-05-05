using Domain.Entities.login;

namespace Infrastructure.Persistence.Repository.login
{
    public interface ILoginRepository : IGenericRepository<Login>
    {
        Task<Login> GetByEmail(string email);
    }
}