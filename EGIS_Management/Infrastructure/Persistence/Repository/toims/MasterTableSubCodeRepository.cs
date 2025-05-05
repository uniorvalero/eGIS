using Domain.Entities;

namespace Infrastructure.Persistence.Repository
{
    public class MasterTableSubCodeRepository : GenericRepository<MasterTableSubCode>, IMasterTableSubCodeRepository
    {
        public MasterTableSubCodeRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
