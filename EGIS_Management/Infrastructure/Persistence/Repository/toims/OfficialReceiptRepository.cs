using Domain.Entities.bpltas;
using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository.toims
{
    public class OfficialReceiptRepository : GenericRepository<OfficialReceipt>, IOfficialReceiptRepository
    {
        public OfficialReceiptRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
    }
}
