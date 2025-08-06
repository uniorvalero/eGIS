using Domain.Entities.usermanagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersAddressRepository : GenericRepository<Users_Address>, IUsersAddressRepository
    {
        public UsersAddressRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
