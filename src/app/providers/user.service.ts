import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  private users: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.users = db.list('users');
  }

  getUsers() {
    return this.users;
  }

  newUser(user: User) {
    this.users.push(user);
  }

  getUserByKey(key: string){
    return this.db.list('/users' + key);
  }

  getUserByUid(uid: string) {
    return this.db.list('/users', {
      query: {
        orderByChild: 'uid',
        equalTo: uid
      }
    })
  }

  editUser(key: string, values: Object = {}) {
    let userInFirebase = this.getUserByKey(key);
    if(!userInFirebase){
      return null;
    }
    userInFirebase.update(key, {values});

    return userInFirebase;
  }

  deleteUser(key: string) {
    let userInFirebase = this.getUserByKey(key);
    userInFirebase.remove();
  }

}
