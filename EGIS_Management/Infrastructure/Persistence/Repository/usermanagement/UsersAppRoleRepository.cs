using Domain.Entities.usermanagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.usermanagement
{

    public class UsersAppRoleRepository : GenericRepository<Users_AppRoles>, IUsersAppRoleRepository
    {
        public UsersAppRoleRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
