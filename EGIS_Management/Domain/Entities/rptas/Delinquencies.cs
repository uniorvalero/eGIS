using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.rptas
{
    public class Delinquencies
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("TaxComputations")]
        public int TaxId { get; set; }
        public string Status { get; set; } = string.Empty;
        public string ActionTaken { get; set; } = string.Empty;
        public DateOnly DateFlagged { get; set; }

    }
}
