using Domain.Entities;

namespace Infrastructure.Persistence.Repository.toims
{
    public class RevenueCodeChildRepository : GenericRepository<RevenueCodeChild>, IRevenueCodeChildRepository
    {
        public RevenueCodeChildRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
