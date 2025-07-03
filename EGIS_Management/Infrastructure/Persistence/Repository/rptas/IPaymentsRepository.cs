using Domain.Entities.rptas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repository.rptas
{
    public interface IPaymentsRepository : IGenericRepository<Payments>
    {
        Task<IEnumerable<Payments>> GetAllByReceiptRange(int start, int end);
        Task<bool> UpdatePaymentAsync(Payments payment);
        Task<bool> BatchUpdatePaymentsAsync(List<Payments> payments);
    }
}
