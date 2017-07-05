export class Photo {

  altText: string;
  galleryLinkOnClickEffect: string;
  galleryLinkTarget: string;
  galleryLinkUrl: string;
  galleryReferenceId: string;
  imageCaption: string;
  imageTitle: string;
  imageURL: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
