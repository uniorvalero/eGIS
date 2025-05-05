using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface IBillingTransactionDetailRepository : IGenericRepository<BillingTransactionDetail>
    {
        Task CreateAsync(BillingTransactionDetail detail);
        Task<IEnumerable<BillingTransactionDetail>> GetAllAsync();
        Task<BillingTransactionDetail> GetByIdAsync(int id);
        Task DeleteAsync(BillingTransactionDetail detail);
    }
}
