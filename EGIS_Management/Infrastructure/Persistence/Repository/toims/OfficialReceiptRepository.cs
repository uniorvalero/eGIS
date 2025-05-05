using Domain.Entities.bpltas;
using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository.toims
{
    public class OfficialReceiptRepository : GenericRepository<OfficialReceipt>, IOfficialReceiptRepository
    {
        public OfficialReceiptRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<OfficialReceipt>> GetAllAsync()
        {
            return await _dbContext.OfficialReceipts.Include(r => r.Details).ToListAsync();
        }

        public async Task<OfficialReceipt> GetByIdAsync(int id)
        {
            return await _dbContext.OfficialReceipts.Include(r => r.Details).FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task CreateAsync(OfficialReceipt receipt)
        {
            await _dbContext.OfficialReceipts.AddAsync(receipt);
        }
    }
}
