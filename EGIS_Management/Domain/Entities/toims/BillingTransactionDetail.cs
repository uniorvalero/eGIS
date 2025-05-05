using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class BillingTransactionDetail
    {
        public int Id { get; set; }
        [ForeignKey("BillingTransaction")] public int BillingTransactionId { get; set; }
        public BillingTransaction BillingTransaction { get; set; }
        public string TransactionCode { get; set; }
        public string SubCode { get; set; }
        public decimal Amount { get; set; }
    }
}
