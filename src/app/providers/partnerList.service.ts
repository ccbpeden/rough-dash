import { Injectable } from '@angular/core';
import { PartnerList } from '../models/partnerList.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PartnerListService {
  private partnerLists: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.partnerLists = db.list('/partnerLists');
  }

  getPartnerLists() {
    return this.partnerLists;
  }

  newPartnerList(partnerList: PartnerList) {
    this.partnerLists.push(partnerList);
  }

  getPartnerListByKey(key: string){
    return this.db.list('/partnerLists' + key);
  }

  getPartnerListByTTID(tTID: string) {
    return this.db.list('/partnerLists', {
      query: {
        orderByChild: 'tTReferenceID',
        equalTo: tTID,
      }
    })
  }

  editPartnerList(key: string, values: Object = {}) {
    let partnerListInFirebase = this.getPartnerListByKey(key);
    if(!partnerListInFirebase){
      return null;
    }
    partnerListInFirebase.update(key, {values});
    return partnerListInFirebase;
  }

  deletePartnerList(key: string) {
    let partnerListInFirebase = this.getPartnerListByKey(key);
    partnerListInFirebase.remove();
  }

}
