using Domain.Entities;
using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository.toims
{
    public class OfficialReceiptDetailRepository : GenericRepository<OfficialReceiptDetail>, IOfficialReceiptDetailRepository
    {
        public OfficialReceiptDetailRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<OfficialReceiptDetail>> GetDetailsByORIdAsync(int orID)
        {
            return await _dbContext.Set<OfficialReceiptDetail>().Where(r => r.ReceiptNumber == orID).ToListAsync();
        }

        public async Task<bool> IsCodeDuplicateAsync(string code)
        {
            return await _dbContext.OfficialReceiptDetail.AnyAsync(x => x.Code == code);
        }

    }
}
