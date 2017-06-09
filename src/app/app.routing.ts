import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { DashGridDetailComponent } from './dash-grid-detail/dash-grid-detail.component';
import { DashRowDetailComponent } from './dash-row-detail/dash-row-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
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
  {
  path: 'editor',
  component: EditorComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
