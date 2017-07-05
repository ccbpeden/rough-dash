import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PhotoService {
  private photos: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.photos = db.list('/photos');
  }

  getPhotos() {
    return this.photos;
  }

  newPhoto(photo: Photo) {
    this.photos.push(photo);
  }

  getPhotoByKey(key: string){
    return this.db.list('/photos' + key);
  }

  getPhotoByGalleryReferenceID(gID: string) {
    return this.db.list('/photos', {
      query: {
        orderByChild: 'galleryReferenceId',
        equalTo: gID
      }
    })
  }

  editPhoto(key: string, values: Object = {}) {
    let photoInFirebase = this.getPhotoByKey(key);
    if(!photoInFirebase){
      return null;
    }
    photoInFirebase.update(key, {values});
    return photoInFirebase;
  }

  deletePhoto(key: string) {
    let photoInFirebase = this.getPhotoByKey(key);
    photoInFirebase.remove();
  }

}
