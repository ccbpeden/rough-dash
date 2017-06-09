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
    DashRowDetailComponent
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
