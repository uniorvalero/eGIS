using Domain.Entities.rptas;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public class PaymentsRepository : GenericRepository<Payments>, IPaymentsRepository
    {
        public PaymentsRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {

        }

        public async Task<IEnumerable<Payments>> GetAllByReceiptRange(int start, int end)
        {
            return await _dbContext.Payments
                .Where(p => p.ReceiptNo >= start && p.ReceiptNo <= end)
                .ToListAsync();
        }

        public async Task<bool> UpdatePaymentAsync(Payments payments)
        {
            try
            {
                _dbContext.Payments.Update(payments); 
                await _dbContext.SaveChangesAsync(); 
                return true; 
            }
            catch
            {
                return false; 
            }
        }

        public async Task<bool> BatchUpdatePaymentsAsync(List<Payments> payments)
        {
            if (payments == null || payments.Count == 0)
            {
                throw new ArgumentException("The payments list cannot be null or empty.", nameof(payments));
            }
            try
            {
                _dbContext.Payments.UpdateRange(payments);
                await _dbContext.SaveChangesAsync();
                return true; 
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while updating payments in batch.", ex);
            }
        }
    }
}
