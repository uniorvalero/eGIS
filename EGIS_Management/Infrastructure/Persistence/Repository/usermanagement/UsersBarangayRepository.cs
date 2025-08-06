using Domain.Entities.usermanagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersBarangayRepository : GenericRepository<Users_Barangay>, IUsersBarangayRepository
    {
        public UsersBarangayRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}
