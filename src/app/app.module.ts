import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

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
import { LoginComponent } from './login/login.component';
import { CakeComponent } from './cake/cake.component';

const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

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
    LoginComponent,
    CakeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    routing,
  ],
  bootstrap: [AppComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appState: AppState) {
  }
}
