using Domain.Entities.bpltas;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BPLTASApplicationRepository : GenericRepository<BPLTASApplications>, IBPLTASApplicationRepository
    {
        public BPLTASApplicationRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task<IEnumerable<int>> GetUserNameByRoleList(string status)
        {
            return (IEnumerable<int>)await _dbContext.BPLTASApplications
                .Where(x => x.Status == status)
                .Select(x => x.Id)
                .ToListAsync();
        }
    }
}
