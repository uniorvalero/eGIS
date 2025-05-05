using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.toims
{
    public interface IBillingTransactionRepository : IGenericRepository<BillingTransaction>
    {
        Task<IEnumerable<BillingTransaction>> GetAllAsync();
        Task<BillingTransaction> GetByIdAsync(int id);
        Task CreateAsync(BillingTransaction transaction);
        void Update(BillingTransaction transaction);
        Task DeleteAsync(BillingTransaction transaction);
        Task<IEnumerable<BillingTransaction>> GetByDateRangeAsync(DateTime startDate, DateTime endDate);
        Task<IEnumerable<BillingTransaction>> GetByPayorNameAsync(string payorName);
        Task<IEnumerable<BillingTransaction>> GetByReceiptTypeAsync(string receiptType);
        Task<decimal> GetTotalAmountByDateRangeAsync(DateTime startDate, DateTime endDate);

    }
}
