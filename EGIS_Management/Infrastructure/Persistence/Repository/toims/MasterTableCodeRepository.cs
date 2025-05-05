using Domain.Entities;

namespace Infrastructure.Persistence.Repository
{
    public class MasterTableCodeRepository : GenericRepository<MasterTableCode>, IMasterTableCodeRepository
    {
        public MasterTableCodeRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
