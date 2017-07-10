// imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgaModule } from './theme/nga.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { masterFirebaseConfig } from './api-keys';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase/app';
import { AuthService } from './providers/auth.service';
import { PagesModule } from './pages/pages.module';

// declarations
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// firebase api key
export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

const APP_PROVIDERS = [
  AppState,
  GlobalState,
  AuthService,
  NgbActiveModal,
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PagesModule,
  ],
  bootstrap: [AppComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS
  ],
})
export class AppModule {
  constructor(public appState: AppState) {
  }
}
