import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [

  {
    path :'',
    redirectTo : 'login',
    pathMatch :'full'
  },
  // {
  //   path :'login',
  //   loadComponent: () =>
  //     import('./toims/login/login.component').then(m => m.LoginComponent),
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('./usermanagement/components/user-login/user-login.component').then(m => m.UserLoginComponent),
  },
  {
    path: 'mdashboard',
    loadComponent: () =>
      import('./admin/components/mayors-dashboard/mayors-dashboard.component').then(m => m.MayorsDashboardComponent),
  },
  {
    path: 'mayorsprofileedit',
    loadComponent: () =>
      import('./admin/components/mayors-profile-edit/mayors-profile-edit.component').then(m => m.MayorsProfileEditComponent),
  },
  {
    path: 'mayorsphoto',
    loadComponent: () =>  
      import('./admin/components/mayors-photo-upload/mayors-photo-upload.component').then(m => m.MayorsPhotoUploadComponent),
  },
  {
    path: 'mayorsprofile',
    loadComponent: () =>
      import('./admin/components/mayors-personal-info/mayors-personal-info.component').then(m => m.MayorsPersonalInfoComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./usermanagement/components/user-signup/user-signup.component').then(m => m.UserSignupComponent),
  },
  {
    path: 'userappstep',
    loadComponent: () =>
      import('./usermanagement/components/user-application-tabs/user-application-tabs.component').then(m => m.UserApplicationTabsComponent),
  },
  {
    path: 'mainlayout',
    loadComponent: () =>
      import('./layout/layout.component').then(m => m.LayoutComponent),
      // canActivate: [authGuard],
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
        path: 'collectionsummarydetails/:code/:month/:year',
        loadComponent: () =>
          import('./toims/collection-summary-details/collection-summary-details.component').then(m => m.CollectionSummaryDetailsComponent),
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
        path: 'batchinputreceipt',
        loadComponent: () =>
         import('./toims/batch-input-receipt/batch-input-receipt.component').then(m => m.BatchInputReceiptComponent),
      },
      {
        path: 'postingrecords',
        loadComponent: () =>
         import('./toims/posting-record/posting-record.component').then(m => m.PostingRecordComponent),
      },
      {
        path: 'inquirytransaction',
        loadComponent: () =>
          import('./toims/inquirytransaction/inquirytransaction.component').then(m => m.InquirytransactionComponent),
      },
      {
        path: 'checkreceivedday',
        loadComponent: () =>
          import('./toims/check-received-day/check-received-day.component').then(m => m.CheckReceivedDayComponent),
      },
      
      //BPLTAS
      {
        path: 'bpltasdashboard',
        loadComponent: () =>
          import('./bpltas/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'bpltasuser',
        loadComponent: () =>
          import('./bpltas/components/user/user.component').then(m => m.UserComponent),
      },
      {
        path: 'bpltasapplication',
        loadComponent: () =>
          import('./bpltas/components/application/application.component').then(m => m.ApplicationComponent),
      },
      {
        path: 'bpltasinspection',
        loadComponent: () =>
          import('./bpltas/components/inspection/inspection.component').then(m => m.InspectionComponent),
      },
      {
        path: 'bpltaspayment',
        loadComponent: () =>
          import('./bpltas/components/payment/payment.component').then(m => m.PaymentComponent),
      },
      {
        path: 'bpltasreport',
        loadComponent: () =>
          import('./bpltas/components/user/user.component').then(m => m.UserComponent),
      },
      {
        path: 'bpltasutility',
        loadComponent: () =>
          import('./toims/utilities/bpltas-utilities/bpltas-utility/bpltas-utility.component').then(m => m.BpltasUtilityComponent),
      },
      //RPTAS-FAASS
      {
        path: 'users',
        loadComponent: () =>
          import('./rptfaass/components/users/users.component').then(m => m.UsersComponent),
      },
      {
        path: 'property',
        loadComponent: () =>
          import('./rptfaass/components/property/property.component').then(m => m.PropertyComponent),
      },
      {
        path: 'rptasdashboard',
        loadComponent: () =>
          import('./rptfaass/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'assessment',
        loadComponent: () =>
          import('./rptfaass/components/assessments/assessments.component').then(m => m.AssessmentsComponent),
      },
      {
        path: 'taxcomputation',
        loadComponent: () =>
          import('./rptfaass/components/tax-computation/tax-computation.component').then(m => m.TaxComputationComponent),
      },
      {
        path: 'rptpayment',
        loadComponent: () =>
          import('./rptfaass/components/payments/payments.component').then(m => m.PaymentsComponent),
      },
      {
        path: 'rptutility',
        loadComponent: () =>
          import('./toims/utilities/rptas-utilities/rptas-utility/rptas-utility.component').then(m => m.RptasUtilityComponent),
      },

      //UTILITIES
      {
        path: 'utilitydashboard',
        loadComponent: () =>
          import('./toims/utilities/dashboard-utility/dashboard-utility.component').then(m => m.DashboardUtilityComponent),
      },
      //USER MANAGEMENT
      {
        path: 'useraddress',
        loadComponent: () =>
          import('./usermanagement/components/user-address/user-address.component').then(m => m.UserAddressComponent),
      },
      {
        path: 'userapp',
        loadComponent: () =>
          import('./usermanagement/components/user-app/user-app.component').then(m => m.UserAppComponent),
      },
      {
        path: 'userbarangay',
        loadComponent: () =>
          import('./usermanagement/components/user-barangay/user-barangay.component').then(m => m.UserBarangayComponent),
      },
      {
        path: 'usercity',
        loadComponent: () =>
          import('./usermanagement/components/user-city/user-city.component').then(m => m.UserCityComponent),
      },
      {
        path: 'usercountry',
        loadComponent: () =>
          import('./usermanagement/components/user-country/user-country.component').then(m => m.UserCountryComponent),
      },
      {
        path: 'usermenu',
        loadComponent: () =>
          import('./usermanagement/components/user-menu/user-menu.component').then(m => m.UserMenuComponent),
      },
      {
        path: 'userprovince',
        loadComponent: () =>
          import('./usermanagement/components/user-province/user-province.component').then(m => m.UserProvinceComponent),
      },
      {
        path: 'userlogin',
        loadComponent: () =>
          import('./usermanagement/components/user-login/user-login.component').then(m => m.UserLoginComponent),
      },
      {
        path: 'userroles',
        loadComponent: () =>
          import('./usermanagement/components/user-roles/user-roles.component').then(m => m.UserRolesComponent),
      },
      {
        path: 'userlist',
        loadComponent: () =>
          import('./usermanagement/components/user-list/user-list.component').then(m => m.UserListComponent),
      },
      {
        path: 'userasset',
        loadComponent: () =>
          import('./usermanagement/components/user-asset-wizard/user-asset-wizard.component').then(m => m.UserAssetWizardComponent),
      }
    ]
  }
];
