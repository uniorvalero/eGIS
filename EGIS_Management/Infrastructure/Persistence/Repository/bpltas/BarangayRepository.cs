using Domain.Entities;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BarangayRepository : GenericRepository<Barangay>, IBarangayRepository
    {
        public BarangayRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
