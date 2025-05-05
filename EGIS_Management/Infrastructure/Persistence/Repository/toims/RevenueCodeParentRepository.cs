using Domain.Entities;

namespace Infrastructure.Persistence.Repository.toims
{
    public class RevenueCodeParentRepository : GenericRepository<RevenueCodeParent>, IRevenueCodeParentRepository
    {
        public RevenueCodeParentRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
