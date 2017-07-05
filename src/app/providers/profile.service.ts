import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfileService {
  private profiles: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.profiles = db.list('/profiles');
  }

  getProfiles() {
    return this.profiles;
  }

  newProfile(profile: Profile) {
    this.profiles.push(profile);
  }

  getProfileByKey(key: string){
    return this.db.list('/profiles' + key);
  }

  getProfileByTTID(tTID: string) {
    return this.db.list('/profiles', {
      query: {
        orderByChild: 'tTReferenceID',
        equalTo: tTID,
      }
    })
  }

  editProfile(key: string, values: Object = {}) {
    let profileInFirebase = this.getProfileByKey(key);
    if(!profileInFirebase){
      return null;
    }
    profileInFirebase.update(key, {values});
    return profileInFirebase;
  }

  deleteProfile(key: string) {
    let profileInFirebase = this.getProfileByKey(key);
    profileInFirebase.remove();
  }

}
