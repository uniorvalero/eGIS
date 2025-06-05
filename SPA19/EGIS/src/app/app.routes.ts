import { Routes } from '@angular/router';
import { authGuard } from './toims/auth.guard';

export const routes: Routes = [

  {
    path :'',
    redirectTo : 'login',
    pathMatch :'full'
  },
  {
    path :'login',
    loadComponent: () =>
      import('./toims/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'mainlayout',
    loadComponent: () =>
      import('./toims/layout/layout.component').then(m => m.LayoutComponent),
        canActivate: [authGuard],
    children: [
      {
        path: 'master',
        loadComponent: () =>
         import('./toims/master-code/master-code.component').then(m => m.MasterCodeComponent),
      },
      {
        path: 'mastersubcode/:code/:description',
        loadComponent: () =>
          import('./toims/master-sub-code/master-sub-code.component').then(m => m.MasterSubcodeComponent),
      },
      {
        path: 'revenuecodeparent',
        loadComponent: () =>
         import('./toims/revenuecodeparent/revenuecodeparent.component').then(m => m.RevenuecodeparentComponent),
      },
      {
        path: 'revenuecodechild/:code/:description',
        loadComponent: () =>
         import('./toims/revenuecodechild/revenuecodechild.component').then(m => m.RevenuecodechildComponent),
      },
      {
        path: 'collectionsummary',
        loadComponent: () =>
         import('./toims/collection-summary/collection-summary.component').then(m => m.CollectionSummaryComponent),
      },
      {
        path: 'teller',
        loadComponent: () =>
         import('./toims/teller/teller.component').then(m => m.TellerComponent),
      },
      {
        path: 'estimatedrevenue',
        loadComponent: () =>
         import('./toims/estimatedrevenue/estimatedrevenue.component').then(m => m.EstimatedrevenueComponent),
      },
      {
        path: 'managingtemplate',
        loadComponent: () =>
         import('./toims/managingtemplate/managingtemplate.component').then(m => m.ManagingtemplateComponent),
      },
      {
        path: 'officialreceipt',
        loadComponent: () =>
          import('./toims/officialreceipttransaction/officialreceipttransaction.component').then(m => m.OfficialreceipttransactionComponent),
      },
      {
        path: 'officialreceiptdetails/:receiptNumber/:payor',
        loadComponent: () =>
          import('./toims/officialreceipttransaction-details/officialreceipttransaction-details.component').then(m => m.OfficialreceipttransactionDetailsComponent),
      },
      {
        path: 'formissuance',
        loadComponent: () =>
          import('./toims/form-issuance/form-issuance.component').then(m => m.FormIssuanceComponent),
      },
      {
        path: 'cashticket',
        loadComponent: () =>
          import('./toims/cash-ticket/cash-ticket.component').then(m => m.CashTicketComponent),
      },
      {
        path: 'checkreceivedday',
        loadComponent: () =>
          import('./toims/check-received-day/check-received-day.component').then(m => m.CheckReceivedDayComponent),
      },
      {
        path: 'inquirytransaction',
        loadComponent: () =>
          import('./toims/inquirytransaction/inquirytransaction.component').then(m => m.InquirytransactionComponent),
      },
      //BPLTAS
      {
        path: 'systemtable',
        loadComponent: () =>
          import('./bpltas/setup-system-table/setup-system-table.component').then(m => m.SetupSystemTableComponent),  
      },
      {
        path: 'bank',
        loadComponent: () =>
          import('./bpltas/setup-bank/setup-bank.component').then(m => m.SetupBankComponent),
      },
      {
        path: 'baranggay',
        loadComponent: () =>
          import('./bpltas/setup-baranggay/setup-baranggay.component').then(m => m.SetupBaranggayComponent),
      },
      {
        path: 'collector',
        loadComponent: () =>
          import('./bpltas/setup-collector/setup-collector.component').then(m => m.SetupCollectorComponent),
      },
      {
        path: 'category',
        loadComponent: () =>
          import('./bpltas/setup-category/setup-category.component').then(m => m.SetupCategoryComponent),
      },
      {
        path: 'penaltyschedule',
        loadComponent: () =>
          import('./bpltas/setup-penalty-schedule/setup-penalty-schedule.component').then(m => m.SetupPenaltyScheduleComponent),
      },
      {
        path: 'cityordinancecode',
        loadComponent: () =>
          import('./bpltas/setup-city-ordinance-code/setup-city-ordinance-code.component').then(m => m.SetupCityOrdinanceCodeComponent),
      },
      {
        path: 'businesscode',
        loadComponent: () =>
          import('./bpltas/setup-business-code/setup-business-code.component').then(m => m.SetupBusinessCodeComponent),
      },
      {
        path: 'taxpayercorporatecode',
        loadComponent: () =>
          import('./bpltas/setup-taxpayer-corporate-code/setup-taxpayer-corporate-code.component').then(m => m.SetupTaxpayerCorporateCodeComponent),
      },
      {
        path: 'masterfiledata',
        loadComponent: () =>
          import('./bpltas/setup-master-file-data/setup-master-file-data.component').then(m => m.SetupMasterFileDataComponent),
      },
      {
        path: 'extensiondate',
        loadComponent: () =>
          import('./bpltas/setup-extension-date/setup-extension-date.component').then(m => m.SetupExtensionDateComponent),
      },
      {
        path: 'businesspermit',
        loadComponent: () =>
          import('./bpltas/transaction-business-permit/transaction-business-permit.component').then(m => m.TransactionBusinessPermitComponent),
      },
      {
        path: 'billing',
        loadComponent: () =>
          import('./bpltas/transaction-billing/transaction-billing.component').then(m => m.TransactionBillingComponent),
      },
      {
        path: 'payment',
        loadComponent: () =>
          import('./bpltas/transaction-payment/transaction-payment.component').then(m => m.TransactionPaymentComponent),
      },
      {
        path: 'accountledger',
        loadComponent: () =>
          import('./bpltas/transaction-account-subs-ledger/transaction-account-subs-ledger.component').then(m => m.TransactionAccountSubsLedgerComponent),
      },
      {
        path: 'additionalfee',
        loadComponent: () =>
          import('./bpltas/transaction-additional-fee/transaction-additional-fee.component').then(m => m.TransactionAdditionalFeeComponent),
      },
      {
        path: 'checks',
        loadComponent: () =>
          import('./bpltas/transaction-checks/transaction-checks.component').then(m => m.TransactionChecksComponent),
      },
      {
        path: 'taxcredit',
        loadComponent: () =>
          import('./bpltas/transaction-tax-credit/transaction-tax-credit.component').then(m => m.TransactionTaxCreditComponent),
      },
      {
        path: 'holdaccount',
        loadComponent: () =>
          import('./bpltas/transaction-hold-unhold-account/transaction-hold-unhold-account.component').then(m => m.TransactionHoldUnholdAccountComponent),
      },
      {
        path: 'releasingpermit',
        loadComponent: () =>
          import('./bpltas/transaction-releasing-permit/transaction-releasing-permit.component').then(m => m.TransactionReleasingPermitComponent),
      },
      {
        path: 'renewalassesment',
        loadComponent: () =>
          import('./bpltas/transaction-renewal-assesment/transaction-renewal-assesment.component').then(m => m.TransactionRenewalAssesmentComponent),
      },
      {
        path: 'transmital',
        loadComponent: () =>
          import('./bpltas/transaction-transmital/transaction-transmital.component').then(m => m.TransactionTransmitalComponent),
      },
      {
        path: 'applicationretirement',
        loadComponent: () =>
          import('./bpltas/transaction-application-retirement/transaction-application-retirement.component').then(m => m.TransactionApplicationRetirementComponent),
      },
      {
        path: 'tellertransaction',
        loadComponent: () =>
          import('./bpltas/transaction-teller-transaction/transaction-teller-transaction.component').then(m => m.TransactionTellerTransactionComponent),  
      },
      {
        path: 'accountadjustment',
        loadComponent: () =>
          import('./bpltas/transaction-account-adjustment/transaction-account-adjustment.component').then(m => m.TransactionAccountAdjustmentComponent),
      },
      {
        path: 'accountupdate',
        loadComponent: () =>
          import('./bpltas/transaction-account-update/transaction-account-update.component').then(m => m.TransactionAccountUpdateComponent),
      },
    ]
  }

];
