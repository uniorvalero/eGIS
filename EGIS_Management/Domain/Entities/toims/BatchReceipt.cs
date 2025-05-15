using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class BatchReceipt
    {
        [Key] public int Id { get; set; }
        public DateTime BatchDate { get; set; }
        [ForeignKey("OfficialReceipt")] public int OfficialReceiptId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }

}
