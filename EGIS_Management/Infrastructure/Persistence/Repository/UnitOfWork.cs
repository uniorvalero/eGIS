using Infrastructure.Persistence.Repository.bpltas;
using Infrastructure.Persistence.Repository.login;
using Infrastructure.Persistence.Repository.rptas;
using Infrastructure.Persistence.Repository.toims;
using Infrastructure.Persistence.Repository.usermanagement;

namespace Infrastructure.Persistence.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        public EGISManagementDbContext _dbContext;

        public UnitOfWork(EGISManagementDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //Login Setup Models Repository
        public ILoginRepository Login => new LoginRepository(_dbContext);
        //BPLTAS Setup Models Repository
        public IBPLTASBanksRepository BPLTASBanks => new BPLTASBanksRepository(_dbContext);
        public IBPLTASUserRepository BPLTASUsers => new BPLTASUserRepository(_dbContext);
        public IBPLTASInspectionRepository BPLTASInspections => new BPLTASInspectionRepository(_dbContext);
        public IBPLTASPaymentRepository BPLTASPayments => new BPLTASPaymentRepository(_dbContext);
        public IBPLTASApplicationRepository BPLTASApplications => new BPLTASApplicationRepository(_dbContext);
        //TOIMS Setup Models Repository
        public IMasterTableCodeRepository MasterCode => new MasterTableCodeRepository(_dbContext);
        public IMasterTableSubCodeRepository SubCode => new MasterTableSubCodeRepository(_dbContext);
        public IRevenueCodeParentRepository RevenueCodeParent => new RevenueCodeParentRepository(_dbContext);
        public IRevenueCodeChildRepository RevenueCodeChild => new RevenueCodeChildRepository(_dbContext);
        public ITellerRepository Teller => new TellerRepository(_dbContext);
        public IEstimatedRevenueRepository EstimatedRevenue => new EstimatedRevenueRepository(_dbContext);
        public IManagingTemplateRepository ManagingTemplate => new ManagingTemplateRepository(_dbContext);
        public ICollectionSummaryRepository CollectionSummary => new CollectionSummaryRepository(_dbContext);
        public ICollectionSummaryDetailsRepository CollectionSummaryDetails => new CollectionSummaryDetailsRepository(_dbContext);
        //TOIMS Transaction Models Repository
        public IOfficialReceiptRepository OfficialReceipt => new OfficialReceiptRepository(_dbContext);
        public IOfficialReceiptDetailRepository OfficialReceiptDetail => new OfficialReceiptDetailRepository(_dbContext);
        public IBillingTransactionRepository BillingTransaction => new BillingTransactionRepository(_dbContext);
        public IFormIssuanceRepository FormIssuance => new FormIssuanceRepository(_dbContext);
        public ICashTicketRepository CashTicket => new CashTicketRepository(_dbContext);
        public ITransferTaxConfirmationRepository TransferTaxConfirmation => new TransferTaxConfirmationRepository(_dbContext);
        public ICheckPaymentRepository CheckPayment => new CheckPaymentRepository(_dbContext);
        public IPostingRecordRepository PostingRecord => new PostingRecordRepository(_dbContext);
        public ICancelledReceiptRepository CancelledReceipt => new CancelledReceiptRepository(_dbContext);
        public IReceiptInquiryLogRepository ReceiptInquiryLog => new ReceiptInquiryLogRepository(_dbContext);
        public IBatchReceiptRepository BatchReceipt => new BatchReceiptRepository(_dbContext);
        public ICheckReceivedDayRepository CheckReceivedDay => new CheckReceivedDayRepository(_dbContext);
        //RPTAS Repository
        public IUsersRepository Users => new UsersRepository(_dbContext);
        public IAssessmentsRepository Assessments => new AssessmentsRepository(_dbContext);
        public IPropertiesRepository Properties => new PropertiesRepository(_dbContext);
        public ITaxComputationsRepository TaxComputations => new TaxComputationsRepository(_dbContext);
        public IPaymentsRepository Payments => new PaymentsRepository(_dbContext);
        //User Management Repository
        public IUsersAddressRepository UsersAddress => new UsersAddressRepository(_dbContext);
        public IUsersAppRepository UsersApp => new UsersAppRepository(_dbContext);
        public IUsersAppRoleRepository UsersAppRole => new UsersAppRoleRepository(_dbContext);
        public IUsersAppSubcriptionRepository UsersAppSubcription => new UsersAppSubcriptionRepository(_dbContext);
        public IUsersBarangayRepository UsersBarangay => new UsersBarangayRepository(_dbContext);
        public IUsersCaptchaRepository UsersCaptcha => new UsersCaptchaRepository(_dbContext);
        public IUsersCityRepository UsersCity => new UsersCityRepository(_dbContext);
        public IUsersCountryRepository UsersCountry => new UsersCountryRepository(_dbContext);
        public IUsersLoginRepository UsersLogin => new UsersLoginRepository(_dbContext);
        public IUsersOtpTokenRepository UsersOtpToken => new UsersOtpTokenRepository(_dbContext);
        public IUsersProfileRepository UsersProfile => new UsersProfileRepository(_dbContext);
        public IUsersRoleRepository UsersRole => new UsersRoleRepository(_dbContext);
        public IUsersUserRepository UsersUser => new UsersUserRepository(_dbContext);
        public IUsersUserRoleRepository UsersUserRole => new UsersUserRoleRepository(_dbContext);
        public IUsersMenuRepository UsersMenu => new UsersMenuRepository(_dbContext);
        public IUsersRoleMenuRepository UsersRoleMenu => new UsersRoleMenuRepository(_dbContext);
        //Task bool CommitAsync()
        public async Task<bool> CommitAsync()
        {
            try
            {
                return await _dbContext.SaveChangesAsync() > 0;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
