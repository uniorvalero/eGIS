using Domain.Entities.usermanagement;
using Infrastructure.Persistence;
using Infrastructure.Persistence.Repository;
using Infrastructure.Persistence.Repository.usermanagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.usermanagement
{
    public class UsersProfileRepository : GenericRepository<Users_Profile>, IUsersProfileRepository
    {
        public UsersProfileRepository(EGISManagementDbContext dbContext) : base(dbContext) { }
    }
}