using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    [Table("ReceiptInquiryLogs", Schema = "Transaction")]
    public class ReceiptInquiryLog
    {
        [Key] public int Id { get; set; }
        public string ReceiptNumber { get; set; }
        public string QueriedBy { get; set; }
        public DateTime QueryDate { get; set; }
    }

}
