export class Video {

  galleryReferenceId: string;
  videoThumbnail: string;
  videoUrl: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
