using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public  class MasterTableCode
    {
        [Key]
        public int Id { get; set; }
        public int Code { get; set; }
        public string Description { get; set; } = string.Empty;
        public DateTime Createdat { get; set; } = DateTime.Now;
    }
}
