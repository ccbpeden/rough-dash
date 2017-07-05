import { Injectable } from '@angular/core';
import { Banner } from '../models/promoBanner.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BannerService {
  private banners: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.banners = db.list('/banners');
  }

  getBanners() {
    return this.banners;
  }

  newBanner(banner: Banner) {
    this.banners.push(banner);
  }

  getBannerByKey(key: string){
    return this.db.list('/banners' + key);
  }

  getBannerByTTID(tTID: string) {
    return this.db.list('/banners', {
      query: {
        orderByChild: 'tTReferenceID',
        equalTo: tTID,
      }
    })
  }

  editBanner(key: string, values: Object = {}) {
    let bannerInFirebase = this.getBannerByKey(key);
    if(!bannerInFirebase){
      return null;
    }
    bannerInFirebase.update(key, {values});
    return bannerInFirebase;
  }

  deleteBanner(key: string) {
    let bannerInFirebase = this.getBannerByKey(key);
    bannerInFirebase.remove();
  }

}
