using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public class CancelledReceiptRepository : GenericRepository<CancelledReceipt>, ICancelledReceiptRepository
    {
        public CancelledReceiptRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        // Implement custom methods if needed
    }
}
