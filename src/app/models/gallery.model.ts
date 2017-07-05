export class Gallery {

  galleryName: string;
  tTReferenceID: string;
  galleryType: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
