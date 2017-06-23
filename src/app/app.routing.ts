import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: 'pages', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages/dashboard' },
  { path: '', component: LoginComponent },
  { path: 'account', component: AccountComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
