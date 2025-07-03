using Domain.Entities.rptas;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public class UsersRepository : GenericRepository<Users>, IUsersRepository
    {
        public UsersRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<string>> GetUserNameByRoleList(string role)
        {
            return await _dbContext.Users
                .Where(x => x.Role == role)
                .Select(x => x.UserName)
                .ToListAsync();
        }

        public async Task<IEnumerable<Users>> GetUserByRole(string role)
        {
            return await _dbContext.Users
                .Where(x => x.Role == role)
                .ToListAsync();
        }
    }
}
