import { Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TourService {
  private trueTours: FirebaseListObservable<any[]>;
  private currentTourKey;

  constructor(private db: AngularFireDatabase) {
    this.trueTours = db.list('/trueTours');
  }

  getTours() {
    return this.trueTours;
  }

  newTrueTour(trueTour: Tour) {
    this.trueTours.push(trueTour);
  }

  getTrueTourByKey(key: string){
    return this.db.list('/trueTours' + key);
  }

  getTrueTourByUid(uid: string) {
    return this.db.list('/trueTours', {
      query: {
        orderByChild: 'referenceUserId',
        equalTo: uid
      }
    })
  }

  setCurrentTourKey(key) {
    this.currentTourKey = key;
    console.log("currentTourKey set");
  }

  returnCurrentTourKey(){
    return this.currentTourKey;
  }

  editTrueTour(key: string, values: Object = {}) {
    let trueTourInFirebase = this.getTrueTourByKey(key);
    if(!trueTourInFirebase){
      return null;
    }
    trueTourInFirebase.update(key, {values});
    return trueTourInFirebase;
  }

  deleteTrueTour(key: string) {
    let trueTourInFirebase = this.getTrueTourByKey(key);
    trueTourInFirebase.remove();
  }

}
