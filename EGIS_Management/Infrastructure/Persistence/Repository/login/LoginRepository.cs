using Domain.Entities.login;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.login
{
    public class LoginRepository : GenericRepository<Login>, ILoginRepository
    {
        public LoginRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public Task<Login> GetByEmail(string email)
        {
            throw new NotImplementedException();
        }
    }
}