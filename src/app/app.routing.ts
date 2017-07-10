import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'pages', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  { path: '', component: LoginComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
