using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.rptas
{
    public class TaxComputations
    {
        [Key]
        public int TaxComputationId { get; set; }
        [ForeignKey("Assessments")]
        public int AssessmentId { get; set; }
        public double TaxYear { get; set; }
        public double BasicTax { get; set; }
        public double SefTax { get; set; }
        public double IdleLandTax { get; set; }
        public double TotalDue { get; set; }
        public double Discount { get; set; }
        public double Penalty { get; set; }
        public double FinalAmount { get; set; }
        public string Status { get; set; }
    }
}
