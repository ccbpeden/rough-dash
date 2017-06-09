import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BillingComponent,
    AccountComponent,
    HelpComponent,
    HomeComponent,
    EditorComponent,
    DashGridDetailComponent,
    DashRowDetailComponent,
    EditorDetail360PhotosComponent,
    EditorDetailPromoBannerComponent,
    EditorDetailMenuLinksComponent,
    EditorDetailVideoGalleryComponent,
    EditorDetailPhotoGalleryComponent,
    EditorDetailMapDirectionsComponent,
    EditorDetailInfoLinksComponent,
    EditorDetailAnalyticsComponent,
    BillingDetailInvoicesComponent,
    BillingDetailAlertsComponent,
    BillingDetailPaymentMethodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
