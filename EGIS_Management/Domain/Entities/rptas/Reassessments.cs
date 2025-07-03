using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.rptas
{
    public class Reassessments
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Properties")]
        public int PropertyId { get; set; }
        [ForeignKey("Users")]
        public int RequestedBy { get; set; }
        public string Reason { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateOnly RequestedDate { get; set; }
        public DateOnly DateReviewed { get; set; }
    }
}
