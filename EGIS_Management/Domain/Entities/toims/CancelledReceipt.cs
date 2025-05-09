using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class CancelledReceipt
    {
        [Key] public int Id { get; set; }
        public string ReceiptNumber { get; set; }
        public DateTime CancelledDate { get; set; }
        public string Reason { get; set; }
    }

}
