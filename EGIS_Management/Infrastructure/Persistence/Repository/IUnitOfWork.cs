using Infrastructure.Persistence.Repository.bpltas;
using Infrastructure.Persistence.Repository.login;
using Infrastructure.Persistence.Repository.rptas;
using Infrastructure.Persistence.Repository.toims;
using Infrastructure.Persistence.Repository.usermanagement;

namespace Infrastructure.Persistence.Repository
{
    public interface IUnitOfWork
    {
        Task<bool> CommitAsync();
        //Login Repository
        ILoginRepository Login { get; }
        //BPLTAS Repository
        IBPLTASBanksRepository BPLTASBanks { get; }
        IBPLTASUserRepository BPLTASUsers { get; }
        IBPLTASInspectionRepository BPLTASInspections { get; }
        IBPLTASPaymentRepository BPLTASPayments { get; }
        IBPLTASApplicationRepository BPLTASApplications { get; }
        //TOIMS Setup Models
        IMasterTableCodeRepository MasterCode { get; }
        IMasterTableSubCodeRepository SubCode { get; }
        IRevenueCodeParentRepository RevenueCodeParent { get; }
        IRevenueCodeChildRepository RevenueCodeChild { get; }
        ITellerRepository Teller { get; }
        IEstimatedRevenueRepository EstimatedRevenue { get; }
        IManagingTemplateRepository ManagingTemplate { get; }
        ICollectionSummaryRepository CollectionSummary { get; }
        ICollectionSummaryDetailsRepository CollectionSummaryDetails { get; }
        //TOIMS Transaction Models
        IOfficialReceiptRepository OfficialReceipt { get; }
        IOfficialReceiptDetailRepository OfficialReceiptDetail { get; }
        IBillingTransactionRepository BillingTransaction { get; }
        IFormIssuanceRepository FormIssuance { get; }
        ICashTicketRepository CashTicket { get; }
        ITransferTaxConfirmationRepository TransferTaxConfirmation { get; }
        ICheckPaymentRepository CheckPayment { get; }
        IPostingRecordRepository PostingRecord { get; }
        ICancelledReceiptRepository CancelledReceipt { get; }
        IReceiptInquiryLogRepository ReceiptInquiryLog { get; }
        IBatchReceiptRepository BatchReceipt { get; }
        ICheckReceivedDayRepository CheckReceivedDay { get; }
        //RPTAS
        IUsersRepository Users { get; }
        IAssessmentsRepository Assessments { get; }
        IPropertiesRepository Properties { get; }
        ITaxComputationsRepository TaxComputations { get; }
        IPaymentsRepository Payments { get; }
        //User Management
        IUsersAppRoleRepository UsersAppRole { get; }
        IUsersAddressRepository UsersAddress { get; }
        IUsersAppRepository UsersApp { get; }
        IUsersAppSubcriptionRepository UsersAppSubcription { get; }
        IUsersBarangayRepository UsersBarangay { get; }
        IUsersCaptchaRepository UsersCaptcha { get; }
        IUsersCityRepository UsersCity { get; }
        IUsersCountryRepository UsersCountry { get; }
        IUsersLoginRepository UsersLogin { get; }
        IUsersOtpTokenRepository UsersOtpToken { get; }
        IUsersProfileRepository UsersProfile { get; }
        IUsersRoleRepository UsersRole { get; }
        IUsersUserRepository UsersUser { get; }
        IUsersUserRoleRepository UsersUserRole { get; }
        IUsersMenuRepository UsersMenu { get; }
        IUsersRoleMenuRepository UsersRoleMenu { get; }
    }
}
