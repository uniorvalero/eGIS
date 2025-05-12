using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository
{
    public class MasterTableSubCodeRepository : GenericRepository<MasterTableSubCode>, IMasterTableSubCodeRepository
    {
        public MasterTableSubCodeRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<MasterTableSubCode>> GetDetailsByMasterCodeAsync(int code)
        {
            return await _dbContext.Set<MasterTableSubCode>().Where(r => r.Code == code).ToListAsync();
        }
        public async Task<bool> IsSubcodeDuplicateAsync(int subcode)
        {
            return await _dbContext.MasterTableSubCode.AnyAsync(x => x.Subcode == subcode);
        }
    }
}
