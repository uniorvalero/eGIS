using Domain.Entities.usermanagement;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.login
{
    public class LoginRepository : GenericRepository<Users_Login>, ILoginRepository
    {
        public LoginRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public Task<Users_Login> GetByEmail(string email)
        {
            throw new NotImplementedException();
        }
    }
}