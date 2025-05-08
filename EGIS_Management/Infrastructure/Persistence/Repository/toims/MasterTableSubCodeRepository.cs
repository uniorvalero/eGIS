using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository
{
    public class MasterTableSubCodeRepository : GenericRepository<MasterTableSubCode>, IMasterTableSubCodeRepository
    {
        public MasterTableSubCodeRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<MasterTableSubCode>> GetDetailsByMasterCode(int code)
        {
            return await _dbContext.MasterTableSubCodes.Include(r => r.Code == code).ToListAsync();
        }
    }
}
