using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    public class Inquiry
    {
        [Key] public int Id { get; set; }
        public DateOnly SetDate { get; set; }
        public int ORNumber { get; set; }
        public string Char { get; set; }
        public string PayorName { get; set; }
        public int Particular { get; set; }
        public string Remarks { get; set; }
        public int BookNumber { get; set; }
        public string IssuingTeller { get; set; }
        public DateTime IssuingDate { get; set; }
        public string VerificationDetail { get; set; }
        public DateOnly Validity { get; set; }
        public int FormNumber { get; set; }

    }
}
