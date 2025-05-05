using Domain.Entities;
using Domain.Entities.bpltas;
using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public class EGISManagementDbContext(DbContextOptions<EGISManagementDbContext> options) : DbContext(options)
    {
        public DbSet<Bank> Banks { get; set; }
        public DbSet<Barangay> Barangays { get; set; }
        public DbSet<Billing> Billings { get; set; }

        //TOIMS Setup Models
        public DbSet<CollectionCode> CollectionCodes { get; set; }
        public DbSet<CollectionSummary> CollectionSummaries { get; set; }
        public DbSet<EstimatedRevenue> EstimatedRevenues { get; set; }
        public DbSet<ManagingTemplate> ManagingTemplates { get; set; }
        public DbSet<RevenueCodeChild> RevenueCodeChild { get; set; }
        public DbSet<RevenueCodeForm> RevenueCodeForm { get; set; }
        public DbSet<RevenueCodeParent> RevenueCodeParent { get; set; }
        public DbSet<MasterTableCode> MasterTableCodes { get; set; }
        public DbSet<MasterTableSubCode> MasterTableSubCodes { get; set; }
        public DbSet<Teller> Tellers { get; set; }
        //public DbSet<Template> Templates { get; set; }
        //public DbSet<TemplateItem> TemplateItems { get; set; }
        //public DbSet<Printer> Printers { get; set; }

        //TOIMS Transaction Models
        public DbSet<OfficialReceipt> OfficialReceipts { get; set; }
        public DbSet<OfficialReceiptDetail> OfficialReceiptDetails { get; set; }
        public DbSet<BillingTransaction> BillingTransactions { get; set; }
        public DbSet<BillingTransactionDetail> BillingTransactionDetails { get; set; }
        public DbSet<FormIssuance> FormIssuances { get; set; }
        public DbSet<CashTicket> CashTickets { get; set; }
        public DbSet<TransferTaxConfirmation> TransferTaxConfirmations { get; set; }
        public DbSet<CheckPayment> CheckPayments { get; set; }
        public DbSet<PostingRecord> PostingRecords { get; set; }
        public DbSet<CancelledReceipt> CancelledReceipts { get; set; }
        public DbSet<ReceiptInquiryLog> ReceiptInquiryLogs { get; set; }
        public DbSet<BatchReceipt> BatchReceipts { get; set; }
    }
}
