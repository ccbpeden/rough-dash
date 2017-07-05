import { Injectable } from '@angular/core';
import { InfoLink } from '../models/infoLink.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class InfoLinkService {
  private infoLinks: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.infoLinks = db.list('/infoLinks');
  }

  getInfoLinkLists() {
    return this.infoLinks;
  }

  newInfoLinkList(infoLink: InfoLink) {
    this.infoLinks.push(infoLink);
  }

  getInfoLinkListByKey(key: string){
    return this.db.list('/infoLinks' + key);
  }

  getInfoLinkListByTTID(tTID: string) {
    return this.db.list('/infoLinks', {
      query: {
        orderByChild: 'tTReferenceID',
        equalTo: tTID,
      }
    })
  }

  editInfoLinkList(key: string, values: Object = {}) {
    let infoLinkInFirebase = this.getInfoLinkListByKey(key);
    if(!infoLinkInFirebase){
      return null;
    }
    infoLinkInFirebase.update(key, {values});
    return infoLinkInFirebase;
  }

  deleteInfoLinkList(key: string) {
    let infoLinkInFirebase = this.getInfoLinkListByKey(key);
    infoLinkInFirebase.remove();
  }

}
