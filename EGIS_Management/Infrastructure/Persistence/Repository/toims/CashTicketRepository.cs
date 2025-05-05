using Domain.Entities.toims;

namespace Infrastructure.Persistence.Repository.toims
{
    public class CashTicketRepository : GenericRepository<CashTicket>, ICashTicketRepository
    {
        public CashTicketRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        // Implement custom methods if needed
    }
}
