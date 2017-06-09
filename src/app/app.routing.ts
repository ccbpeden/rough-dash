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
import { EditorDetail360PhotosComponent } from './editor-detail-360-photos/editor-detail-360-photos.component';
import { EditorDetailPromoBannerComponent } from './editor-detail-promo-banner/editor-detail-promo-banner.component';
import { EditorDetailMenuLinksComponent } from './editor-detail-menu-links/editor-detail-menu-links.component';
import { EditorDetailVideoGalleryComponent } from './editor-detail-video-gallery/editor-detail-video-gallery.component';
import { EditorDetailPhotoGalleryComponent } from './editor-detail-photo-gallery/editor-detail-photo-gallery.component';
import { EditorDetailMapDirectionsComponent } from './editor-detail-map-directions/editor-detail-map-directions.component';
import { EditorDetailInfoLinksComponent } from './editor-detail-info-links/editor-detail-info-links.component';
import { EditorDetailAnalyticsComponent } from './editor-detail-analytics/editor-detail-analytics.component';
import { BillingDetailInvoicesComponent } from './billing-detail-invoices/billing-detail-invoices.component';
import { BillingDetailAlertsComponent } from './billing-detail-alerts/billing-detail-alerts.component';
import { BillingDetailPaymentMethodComponent } from './billing-detail-payment-method/billing-detail-payment-method.component';

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
  {
  path: 'editor',
  component: EditorComponent,
  children: [
    { path: '', redirectTo: '360-photos', pathMatch: 'full' },
    { path: '360-photos', component: EditorDetail360PhotosComponent },
    { path: 'analytics', component: EditorDetailAnalyticsComponent },
    { path: 'info-links', component: EditorDetailInfoLinksComponent },
    { path: 'map-directions', component: EditorDetailMapDirectionsComponent },
    { path: 'menu-links', component: EditorDetailMenuLinksComponent },
    { path: 'photo-gallery', component: EditorDetailPhotoGalleryComponent },
    { path: 'promo-banner', component: EditorDetailPromoBannerComponent },
    { path: 'video-gallery', component: EditorDetailVideoGalleryComponent },
  ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
