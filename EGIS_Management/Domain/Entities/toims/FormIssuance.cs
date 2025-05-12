using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class FormIssuance
    {
        [Key] public int Id { get; set; }
        public string BookNumber { get; set; }
        public int Quantity { get; set; }
        public int StartReceipt { get; set; }
        public int EndReceipt { get; set; }
        public string Char { get; set; }
        [ForeignKey("Teller")] public int TellerCode { get; set; }
        public DateOnly FinalDate { get; set; }
        public DateTime DateAssigned { get; set; }
        public Teller Teller { get; set; }
    }
}
