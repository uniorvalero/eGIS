using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.bpltas
{
    public class BPLTASApplications
    {
        [Key]   
        public int Id { get; set; }
        [ForeignKey("BPLTASSUser")]
        public int OwnerId { get; set; }
        public int BusinessPermitNo { get; set; }
        public string BusinessName { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateOnly ApplicationDate { get; set; }
        public DateOnly ReleaseDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
