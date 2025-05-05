using Domain.Entities;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class CollectionCodeRepository : GenericRepository<CollectionCode>, ICollectionCodeRepository
    {
        public CollectionCodeRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
