using Domain.Entities.bpltas;
using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace Infrastructure.Persistence.Repository.toims
{
    public class OfficialReceiptRepository : GenericRepository<OfficialReceipt>, IOfficialReceiptRepository
    {
        public OfficialReceiptRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task<IEnumerable<OfficialReceipt>> GetAllByDateAndForm(DateOnly startDate, DateOnly endDate, int form)
        {
            return await _dbContext.Set<OfficialReceipt>()
                .Where(x => x.DateIssue >= startDate && x.DateIssue <= endDate && x.SubCode == form)
                .ToListAsync();
        }
        public async Task<IEnumerable<OfficialReceipt>> GetAllByRangeDateAndForm(int subcode, int startRange, int endRange, string character)
        {
            return await _dbContext.Set<OfficialReceipt>()
                .Where(x => x.SubCode == subcode && x.ReceiptNumber >= startRange && x.ReceiptNumber <= endRange && x.Char == character)
                .ToListAsync();
        }
    }
}
