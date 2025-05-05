using Domain.Entities.bpltas;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BillingRepository : GenericRepository<Billing>, IBillingRepository
    {
        public BillingRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
