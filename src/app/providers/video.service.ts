import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class VideoService {
  private videos: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.videos = db.list('/videos');
  }

  getVideos() {
    return this.videos;
  }

  newVideo(video: Video) {
    this.videos.push(video);
  }

  getVideoByKey(key: string){
    return this.db.list('/videos' + key);
  }

  getVideoByGalleryID(galleryID: string) {
    return this.db.list('/videos', {
      query: {
        orderByChild: 'galleryReferenceId',
        equalTo: galleryID
      }
    })
  }

  editVideo(key: string, values: Object = {}) {
    let videoInFirebase = this.getVideoByKey(key);
    if(!videoInFirebase){
      return null;
    }
    videoInFirebase.update(key, {values});
    return videoInFirebase;
  }

  deleteVideo(key: string) {
    let videoInFirebase = this.getVideoByKey(key);
    videoInFirebase.remove();
  }

}
