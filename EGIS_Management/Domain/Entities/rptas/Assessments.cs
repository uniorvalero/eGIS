using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.rptas
{
    public class Assessments
    {
        [Key] 
        public int AssessmentId { get; set; }
        [ForeignKey("Properties")]
        public int PropertyId { get; set; }
        public double AssessedValue { get; set; } 
        public double MarketValue { get; set; }
        public string AssessmentLevel { get; set; } = string.Empty;
        public DateOnly AssessmentDate { get; set; }
        public DateOnly ValidUntil { get; set; }
        [ForeignKey("Users")]
        public int AssessedBy { get; set; } = 1;
    }
}
