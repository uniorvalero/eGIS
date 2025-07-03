using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.rptas
{
    public class Properties
    {
        [Key]
        public int PropertyId { get; set; }
        public int TaxDeclarationNo { get; set; }
        [ForeignKey("Users")]
        public int OwnerId { get; set; }
        public int TitleNo { get; set; } 
        public string Classification { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string LandArea { get; set; } = string.Empty;
        public bool PropertyStatus { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
