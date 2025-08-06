using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class BillingTransaction
    {
        public int Id { get; set; }
        public string ReceiptType { get; set; }
        public string PayorName { get; set; }
        public bool IsCash { get; set; }
        public string CheckNumber { get; set; }
        public string TransactionCode { get; set; }
        public string SubCode { get; set; }
        public decimal Amount { get; set; }
        public DateTime TransactionDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}
