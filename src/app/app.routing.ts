import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { EditRowDetailComponent } from './edit-row-detail/edit-row-detail.component';
import { EditGridDetailComponent } from './edit-grid-detail/edit-grid-detail.component';
import { BillingDetailInvoicesComponent } from './billing-detail-invoices/billing-detail-invoices.component';
import { BillingDetailAlertsComponent } from './billing-detail-alerts/billing-detail-alerts.component';
import { BillingDetailPaymentMethodComponent } from './billing-detail-payment-method/billing-detail-payment-method.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'rows', pathMatch: 'full' },
          { path: 'grid', component: EditGridDetailComponent },
          { path: 'rows', component: EditRowDetailComponent },
        ]
      },
      {
      path: 'editor',
      component: EditorComponent,
      children: [
        { path: '', redirectTo: 'rows', pathMatch: 'full' },
        { path: 'rows', component: EditRowDetailComponent },
        { path: 'grid', component: EditGridDetailComponent },
      ]
      },
      {
      path: 'billing',
      component: BillingComponent,
      children: [
        { path: '', redirectTo: 'invoices', pathMatch: 'full' },
        { path: 'invoices', component: BillingDetailInvoicesComponent },
        { path: 'alerts', component: BillingDetailAlertsComponent },
        { path: 'payment', component: BillingDetailPaymentMethodComponent },
      ]
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
