using Domain.Entities.bpltas;
using Domain.Entities.rptas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.bpltas
{
    public interface IBPLTASPaymentRepository : IGenericRepository<BPLTASPayments>
    {
        Task<IEnumerable<BPLTASPayments>> GetAllByReceiptRange(int start, int end);
        Task<IEnumerable<BPLTASPayments>> GetAllByStatus(string status);
        Task<bool> UpdatePaymentAsync(BPLTASPayments payment);
        Task<bool> BatchUpdatePaymentsAsync(List<BPLTASPayments> payments);
    }
}
