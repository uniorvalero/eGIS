using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.rptas
{
    public class Payments
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Properties")]
        public int TaxId { get; set; }
        [ForeignKey("Users")]
        public int PayerId {get; set; }
        public DateOnly PaymentDate { get; set; }
        public double AmountPaid { get; set; }
        public string PaymentMethod { get; set; } = string.Empty;
        public int ReceiptNo { get; set; }
        [ForeignKey("Users")]
        public int VerifiedBy { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}
