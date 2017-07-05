import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GalleryService {
  private galleries: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.galleries = db.list('/galleries');
  }

  getGalleries() {
    return this.galleries;
  }

  newGallery(gallery: Gallery) {
    this.galleries.push(gallery);
  }

  getGalleryByKey(key: string){
    return this.db.list('/galleries' + key);
  }

  getGalleryByTTReferenceID(tTReferenceID: string) {
    return this.db.list('/galleries', {
      query: {
        orderByChild: 'tTReferenceID',
        equalTo: tTReferenceID
      }
    })
  }

  editGallery(key: string, values: Object = {}) {
    let galleryInFirebase = this.getGalleryByKey(key);
    if(!galleryInFirebase){
      return null;
    }
    galleryInFirebase.update(key, {values});
    return galleryInFirebase;
  }

  deleteGallery(key: string) {
    let galleryInFirebase = this.getGalleryByKey(key);
    galleryInFirebase.remove();
  }

}
