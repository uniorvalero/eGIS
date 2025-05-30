using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository.toims
{
    public class RevenueCodeChildRepository : GenericRepository<RevenueCodeChild>, IRevenueCodeChildRepository
    {
        public RevenueCodeChildRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<RevenueCodeChild>> GetDetailsByRevenueCodeAsync(string code)
        {
            return await _dbContext.Set<RevenueCodeChild>().Where(r => r.Code == code).ToListAsync();
        }
    }
}
