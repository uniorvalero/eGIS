using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository.toims
{
    public class OfficialReceiptDetailRepository : GenericRepository<OfficialReceiptDetail>, IOfficialReceiptDetailRepository
    {
        public OfficialReceiptDetailRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<OfficialReceiptDetail>> GetAllAsync()
        {
            return await _dbContext.OfficialReceiptDetails.Include(r => r.OfficialReceipt).ToListAsync();
        }

        public async Task<OfficialReceiptDetail> GetByIdAsync(int id)
        {
            return await _dbContext.OfficialReceiptDetails.Include(r => r.OfficialReceipt).FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task CreateAsync(OfficialReceiptDetail receipt)
        {
            await _dbContext.OfficialReceiptDetails.AddAsync(receipt);
        }
    }
}
