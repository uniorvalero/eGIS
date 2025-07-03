using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class CollectionSummary
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double BeginningBalance { get; set; }
        public double Amount { get; set; }
        public double Actual { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }

    }
}
