using Domain.Entities;

namespace Infrastructure.Persistence.Repository.toims
{
    public class ManagingTemplateRepository : GenericRepository<ManagingTemplate>, IManagingTemplateRepository
    {
        public ManagingTemplateRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
