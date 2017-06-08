import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
  path: 'billing',
  component: BillingComponent
  },
  {
  path: 'account',
  component: AccountComponent
  },
  {
  path: 'help',
  component: HelpComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
