using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    [Table("BatchReceipts", Schema = "Transaction")]
    public class BatchReceipt
    {
        [Key] public int Id { get; set; }
        public DateTime BatchDate { get; set; }
        public ICollection<OfficialReceipt> Receipts { get; set; }
    }

}
