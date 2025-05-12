using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repository.toims
{
    public class BillingTransactionRepository : GenericRepository<BillingTransaction>, IBillingTransactionRepository
    {
        public BillingTransactionRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<BillingTransaction>> GetAllAsync()
        {
            return await _dbContext.BillingTransaction.Include(t => t.Details).ToListAsync();
        }

        public async Task<BillingTransaction> GetByIdAsync(int id)
        {
            return await _dbContext.BillingTransaction.Include(t => t.Details).FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task CreateAsync(BillingTransaction transaction)
        {
            await _dbContext.BillingTransaction.AddAsync(transaction);
        }

        public void Update(BillingTransaction transaction)
        {
            _dbContext.BillingTransaction.Update(transaction);
        }

        public async Task DeleteAsync(BillingTransaction transaction)
        {
            _dbContext.BillingTransaction.Remove(transaction);
            await Task.CompletedTask;
        }

        public async Task<IEnumerable<BillingTransaction>> GetByDateRangeAsync(DateTime startDate, DateTime endDate)
        {
            return await _dbContext.BillingTransaction
                .Where(t => t.TransactionDate >= startDate && t.TransactionDate <= endDate)
                .ToListAsync();
        }

        public async Task<IEnumerable<BillingTransaction>> GetByPayorNameAsync(string payorName)
        {
            return await _dbContext.BillingTransaction
                .Where(t => t.PayorName.Contains(payorName))
                .ToListAsync();
        }

        public async Task<IEnumerable<BillingTransaction>> GetByReceiptTypeAsync(string receiptType)
        {
            return await _dbContext.BillingTransaction
                .Where(t => t.ReceiptType == receiptType)
                .ToListAsync();
        }

        public async Task<decimal> GetTotalAmountByDateRangeAsync(DateTime startDate, DateTime endDate)
        {
            return await _dbContext.BillingTransaction
                .Where(t => t.TransactionDate >= startDate && t.TransactionDate <= endDate)
                .SumAsync(t => t.Details.Sum(d => d.Amount));
        }
    }
}
