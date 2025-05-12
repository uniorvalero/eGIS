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
          import('./toims/master-subcode/master-subcode/master-subcode.component').then(m => m.MasterSubcodeComponent),
      },
      {
        path: 'revenuecodeparent',
        loadComponent: () =>
         import('./toims/revenuecodeparent/revenuecodeparent.component').then(m => m.RevenuecodeparentComponent),
      },
      {
        path: 'revenuecodechild',
        loadComponent: () =>
         import('./toims/revenuecodechild/revenuecodechild.component').then(m => m.RevenuecodechildComponent),
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
        path: 'formissuance',
        loadComponent: () =>
          import('./toims/form-issuance/form-issuance.component').then(m => m.FormIssuanceComponent),
      }
    ]
  }

];
