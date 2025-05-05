using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class MasterTableSubCode
    {
        [Key]
        public int Id { get; set; }
        public int Code {get; set; }
        public int Subcode { get; set; }
        public string Description { get; set; } = string.Empty;
        //public string Description2 { get; set; } = string.Empty;
        //public string Description3 { get; set; } = string.Empty;
        //public string Description4 { get; set; } = string.Empty;
        //public string Description5 { get; set; } = string.Empty;
        //public string Description6 { get; set; } = string.Empty;
        //public string Description7 { get; set; } = string.Empty;
        //public string Heading1 { get; set; } = string.Empty;
        //public string Heading2 { get; set; } = string.Empty;
        //public string ColumnPosition { get; set; } = string.Empty;
        //public string CodeRequired { get; set; } = string.Empty;
        //public int PageNo { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

      //  public MasterTableCode? MasterTableCodes { get; set; }
    }
}
