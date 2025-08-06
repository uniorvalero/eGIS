using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.bpltas
{
    public class BPLTASPayments
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("BPLTASApplication")]
        public int ApplicationId { get; set; }
        public int ReceiptNo { get; set; }
        public string TypesOfPayment { get; set; } = string.Empty;
        public double Amount { get; set; }
        public string Status { get; set; }
        public DateOnly PaymentDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; 
    }
}
