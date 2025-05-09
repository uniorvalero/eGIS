using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class PostingRecord
    {
        [Key] public int Id { get; set; }
        public DateTime PostingDate { get; set; }
        public string Frequency { get; set; } // "Daily" or "Monthly"
        public decimal TotalAmount { get; set; }
    }

}
