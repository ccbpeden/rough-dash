import { Injectable } from '@angular/core';
import { threeSixtyPhoto } from '../models/360Photo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class threeSixtyPhotoService {
  private threeSixtyPhotos: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.threeSixtyPhotos = db.list('/360Photos');
  }

  getThreeSixtyPhotos() {
    return this.threeSixtyPhotos;
  }

  newPhoto(threeSixtyPhoto: ThreeSixtyPhoto) {
    this.threeSixtyPhotos.push(threeSixtyPhoto);
  }

  getThreeSixtyPhotoByKey(key: string){
    return this.db.list('/360Photos' + key);
  }

  getPhotoByGalleryReferenceID(gID: string) {
    return this.db.list('/360Photos', {
      query: {
        orderByChild: 'galleryReferenceId',
        equalTo: gID
      }
    })
  }

  editThreeSixtyPhoto(key: string, values: Object = {}) {
    let threeSixtyPhotoInFirebase = this.getThreeSixtyPhotoByKey(key);
    if(!threeSixtyPhotoInFirebase){
      return null;
    }
    threeSixtyPhotoInFirebase.update(key, {values});
    return threeSixtyPhotoInFirebase;
  }

  deletePhoto(key: string) {
    let threeSixtyPhotoInFirebase = this.getThreeSixtyPhotoByKey(key);
    threeSixtyPhotoInFirebase.remove();
  }

}
