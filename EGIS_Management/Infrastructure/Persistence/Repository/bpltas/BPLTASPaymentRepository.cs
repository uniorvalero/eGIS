using Domain.Entities.bpltas;
using Domain.Entities.rptas;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public class BPLTASPaymentRepository : GenericRepository<BPLTASPayments>, IBPLTASPaymentRepository
    {
        public BPLTASPaymentRepository(EGISManagementDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<BPLTASPayments>> GetAllByReceiptRange(int start, int end)
        {
            return await _dbContext.BPLTASPayments
                .Where(p => p.ReceiptNo >= start && p.ReceiptNo <= end)
                .ToListAsync();
        }

        public async Task<IEnumerable<BPLTASPayments>> GetAllByStatus(string status)
        {
            return await _dbContext.BPLTASPayments
                .Where(p => p.Status == "Paid")
                .ToListAsync();
        }

        public async Task<bool> UpdatePaymentAsync(BPLTASPayments payments)
        {
            try
            {
                _dbContext.BPLTASPayments.Update(payments);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> BatchUpdatePaymentsAsync(List<BPLTASPayments> payments)
        {
            if (payments == null || payments.Count == 0)
            {
                throw new ArgumentException("The payments list cannot be null or empty.", nameof(payments));
            }
            try
            {
                _dbContext.BPLTASPayments.UpdateRange(payments);
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
