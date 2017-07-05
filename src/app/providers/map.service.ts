import { Injectable } from '@angular/core';
import { Map } from '../models/map.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MapService {
  private maps: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.maps = db.list('/maps');
  }

  getMaps() {
    return this.maps;
  }

  newMap(map: Map) {
    this.maps.push(map);
  }

  getMapByKey(key: string){
    return this.db.list('/maps' + key);
  }

  getMapByUid(tTID: string) {
    return this.db.list('/maps', {
      query: {
        orderByChild: 'tTReferenceID',
        equalTo: tTID
      }
    })
  }

  editMap(key: string, values: Object = {}) {
    let mapInFirebase = this.getMapByKey(key);
    if(!mapInFirebase){
      return null;
    }
    mapInFirebase.update(key, {values});
    return mapInFirebase;
  }

  deleteMap(key: string) {
    let mapInFirebase = this.getMapByKey(key);
    mapInFirebase.remove();
  }

}
