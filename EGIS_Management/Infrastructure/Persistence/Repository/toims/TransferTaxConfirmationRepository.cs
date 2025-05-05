using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public class TransferTaxConfirmationRepository : GenericRepository<TransferTaxConfirmation>, ITransferTaxConfirmationRepository
    {
        public TransferTaxConfirmationRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }
        // Implement custom methods if needed
    }
}
