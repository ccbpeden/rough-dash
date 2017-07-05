export class Banner {

  galleryReferenceId: string;
  videoThumbnail: string;
  videoUrl: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
