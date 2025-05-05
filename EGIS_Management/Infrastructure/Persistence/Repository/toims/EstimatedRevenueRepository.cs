using Domain.Entities;

namespace Infrastructure.Persistence.Repository.toims
{
    public class EstimatedRevenueRepository : GenericRepository<EstimatedRevenue>, IEstimatedRevenueRepository
    {
        public EstimatedRevenueRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
