using Domain.Entities.bpltas;
using Domain.Entities.rptas;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BPLTASUserRepository : GenericRepository<BPLTASUsers>, IBPLTASUserRepository
    {
        public BPLTASUserRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {

        }
        public async Task<IEnumerable<string>> GetUserNameByRoleList(string role)
        {
            return (IEnumerable<string>)await _dbContext.BPLTASUsers
                .Where(x => x.Role == role)
                .Select(x => new { FullName = (x.FirstName + " " + x.MiddleName + " " + x.LastName).Trim() })
                .ToListAsync();
        }

        public async Task<IEnumerable<BPLTASUsers>> GetUserByRole(string role)
        {
            return await _dbContext.BPLTASUsers
                .Where(x => x.Role == role)
                .ToListAsync();
        }
        
    }
}
