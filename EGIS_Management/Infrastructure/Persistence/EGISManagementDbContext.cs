using Domain.Entities;
using Domain.Entities.bpltas;
using Domain.Entities.toims;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public class EGISManagementDbContext(DbContextOptions<EGISManagementDbContext> options) : DbContext(options)
    {
        public DbSet<Bank> Bank { get; set; }
        public DbSet<Barangay> Barangay { get; set; }
        public DbSet<Billing> Billing { get; set; }

        //TOIMS Setup Models
        public DbSet<CollectionCode> CollectionCode { get; set; }
        public DbSet<CollectionSummary> CollectionSummarie { get; set; }
        public DbSet<EstimatedRevenue> EstimatedRevenue { get; set; }
        public DbSet<ManagingTemplate> ManagingTemplate { get; set; }
        public DbSet<RevenueCodeChild> RevenueCodeChild { get; set; }
        public DbSet<RevenueCodeForm> RevenueCodeForm { get; set; }
        public DbSet<RevenueCodeParent> RevenueCodeParent { get; set; }
        public DbSet<MasterTableCode> MasterTableCode { get; set; }
        public DbSet<MasterTableSubCode> MasterTableSubCode { get; set; }
        public DbSet<Teller> Teller { get; set; }
        //public DbSet<Template> Templates { get; set; }
        //public DbSet<TemplateItem> TemplateItems { get; set; }
        //public DbSet<Printer> Printers { get; set; }

        //TOIMS Transaction Models
        public DbSet<OfficialReceipt> OfficialReceipt { get; set; }
        public DbSet<OfficialReceiptDetail> OfficialReceiptDetail { get; set; }
        public DbSet<BillingTransaction> BillingTransaction { get; set; }
        public DbSet<BillingTransactionDetail> BillingTransactionDetail { get; set; }
        public DbSet<FormIssuance> FormIssuance { get; set; }
        public DbSet<CashTicket> CashTicket { get; set; }
        public DbSet<TransferTaxConfirmation> TransferTaxConfirmation { get; set; }
        public DbSet<CheckPayment> CheckPayment { get; set; }
        public DbSet<CheckReceivedDay> CheckReceivedDay { get; set; }
        public DbSet<PostingRecord> PostingRecord { get; set; }
        public DbSet<CancelledReceipt> CancelledReceipt { get; set; }
        public DbSet<ReceiptInquiryLog> ReceiptInquiryLog { get; set; }
        public DbSet<BatchReceipt> BatchReceipt { get; set; }
    }
}
