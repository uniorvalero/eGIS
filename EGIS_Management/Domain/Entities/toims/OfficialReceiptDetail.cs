using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    [Table("OfficialReceiptDetails", Schema = "Transaction")]
    public class OfficialReceiptDetail
    {
        [Key] public int Id { get; set; }
        [ForeignKey("OfficialReceipt")] public int OfficialReceiptId { get; set; }
        public string AccountCode { get; set; }
        public string AccountDescription { get; set; }
        public decimal Amount { get; set; }
        public OfficialReceipt OfficialReceipt { get; set; }
    }
}
