using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.bpltas
{
    public class BPLTASInspections
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("BPLTASUsers")]
        public int InspectorId { get; set; }
        [ForeignKey("BPLTASApplications")]
        public int ApplicationId { get; set; }
        public string InspectionResult { get; set; } = string.Empty;
        public bool InspectionStatus { get; set; }
        public DateOnly InspectionDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string? Remarks { get; set; } = null;
    }
}
