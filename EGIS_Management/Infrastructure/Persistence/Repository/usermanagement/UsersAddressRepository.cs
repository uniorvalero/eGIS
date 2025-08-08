using Domain.Entities.rptas;
using Domain.Entities.usermanagement;
using Microsoft.EntityFrameworkCore;
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

        public async Task<Users_Address?> GetByUserId(int userId)
        {
            var user = await _dbContext.UsersAddress
                .FirstOrDefaultAsync(p => p.Id == userId);

            if (user == null)
                return null;

            return await _dbContext.UsersAddress
                .FirstOrDefaultAsync(ua => ua.UserId == user.UserId);
        }
    }
}
