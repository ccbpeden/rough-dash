import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService implements CanActivate {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithEmail(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  canActivate(): Observable<boolean> {
    return this.user
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
    if
      (!authenticated) this.router.navigate([ '' ]);
    })
  }

}
