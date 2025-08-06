using Domain.Entities;
using Domain.Entities.bpltas;
using Domain.Entities.rptas;
using Domain.Entities.toims;
using Domain.Entities.usermanagement;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public class EGISManagementDbContext(DbContextOptions<EGISManagementDbContext> options) : DbContext(options)
    {
        // BPLTAS Models
        public DbSet<BPLTASUsers> BPLTASUsers { get; set; }
        public DbSet<BPLTASBanks> BPLTASBanks { get; set; }
        public DbSet<BPLTASApplications> BPLTASApplications { get; set; }
        public DbSet<BPLTASInspections> BPLTASInspections { get; set; }
        public DbSet<BPLTASPayments> BPLTASPayments { get; set; }

        //TOIMS Setup Models
        //public DbSet<CollectionCode> CollectionCode { get; set; }
        public DbSet<CollectionSummary> CollectionSummary { get; set; }
        public DbSet<CollectionSummaryDetails> CollectionSummaryDetails { get; set; }
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
        public DbSet<FormIssuance> FormIssuance { get; set; }
        public DbSet<CashTicket> CashTicket { get; set; }
        public DbSet<TransferTaxConfirmation> TransferTaxConfirmation { get; set; }
        public DbSet<CheckPayment> CheckPayment { get; set; }
        public DbSet<CheckReceivedDay> CheckReceivedDay { get; set; }
        public DbSet<PostingRecord> PostingRecord { get; set; }
        public DbSet<CancelledReceipt> CancelledReceipt { get; set; }
        public DbSet<ReceiptInquiryLog> ReceiptInquiryLog { get; set; }
        public DbSet<BatchReceipt> BatchReceipt { get; set; }
        //RPTAS
        public DbSet<Users> Users { get; set; }
        public DbSet<Assessments> Assessments { get; set; }
        public DbSet<Properties> Properties { get; set; }
        public DbSet<TaxComputations> TaxComputations { get; set; }
        public DbSet<Payments> Payments { get; set; }
        //User Management
        public DbSet<Users_Address> UsersAddress { get; set; }
        public DbSet<Users_App> UsersApp { get; set; }
        public DbSet<Users_AppRoles> AppRoles{ get; set; }
        public DbSet<Users_Barangay> UsersBarangay { get; set; }
        public DbSet<Users_AppSubcription> UsersAppSubcription { get; set; }
        public DbSet<Users_Captcha> UsersCaptcha { get; set; }
        public DbSet<Users_City> UsersCity { get; set; }
        public DbSet<Users_Country> UsersCountry { get; set; }
        public DbSet<Users_Login> UsersLogin { get; set; }
        public DbSet<Users_Menu> UsersMenu{ get; set; }
        public DbSet<Users_OtpToken> UsersOtpToken { get; set; }
        public DbSet<Users_Profile> UsersProfile { get; set; }
        public DbSet<Users_Role> UsersRole { get; set; }
        public DbSet<Users_RoleMenu> RoleMenu{ get; set; }
        public DbSet<Users_User> UsersUser { get; set; }
        public DbSet<Users_UserRole> UsersUserRole { get; set; }
    }
}
