using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.toims
{
    [Table("FormIssuances", Schema = "Transaction")]
    public class FormIssuance
    {
        [Key] public int Id { get; set; }
        public string BookNumber { get; set; }
        public string FormKind { get; set; }
        public string ReceiptCharacter { get; set; }
        public int TellerId { get; set; }
        public Teller Teller { get; set; }
        public DateTime DateAssigned { get; set; }
    }

}
