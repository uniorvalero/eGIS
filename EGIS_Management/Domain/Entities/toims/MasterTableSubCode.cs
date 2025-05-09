using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class MasterTableSubCode
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("MasterTableCode")] 
        public int Code { get; set; }
        public int Subcode { get; set; }
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
