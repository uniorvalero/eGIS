using Domain.Entities.toims;

namespace Infrastructure.Persistence.Repository.toims
{
    public class CheckPaymentRepository : GenericRepository<CheckPayment>, ICheckPaymentRepository
    {
        public CheckPaymentRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        // Implement custom methods if needed
    }
}
