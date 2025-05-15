using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class OfficialReceiptDetail
    {
        [Key] public int Id { get; set; }

        [ForeignKey("OfficialReceipt")] 
        public int ReceiptNumber { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
    }
}
