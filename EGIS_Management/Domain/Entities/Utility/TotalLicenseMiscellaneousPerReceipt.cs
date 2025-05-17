using Domain.Entities.toims;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Utility
{
    public class TotalLicenseMiscellaneousPerReceipt
    {
        [Key] public int Id { get; set; }
        public int FormCode { get; set; }
        public int PartNumber { get; set; }
        public double Amount { get; set; }
        public string Description { get; set; }
        public double TotalAmount { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public ICollection<FormIssuance> FormIssuance { get; set; }
    }
}
