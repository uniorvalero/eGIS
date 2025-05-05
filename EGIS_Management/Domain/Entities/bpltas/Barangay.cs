 using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class Barangay
    {
        [Key]
        public int Id { get; set; }
        public string BaranggayCode { get; set; } = string.Empty;
        public string Baranggay { get; set; } = string.Empty;
        public string District { get; set; } = string.Empty;
        public string Zone { get; set; } = string.Empty;
        public string ContactName { get; set; } = string.Empty;
        public string ContactNo { get; set; } = string.Empty;
        public string Remarks { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;

    }
}
