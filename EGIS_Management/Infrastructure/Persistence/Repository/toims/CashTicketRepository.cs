using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository.toims
{
    public class CashTicketRepository : GenericRepository<CashTicket>, ICashTicketRepository
    {
        public CashTicketRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        public async Task<bool> IsCodeDuplicateAsync(int code)
        {
            return await _dbContext.CashTicket.AnyAsync(x => x.TellerCode == code);
        }
    }
}
