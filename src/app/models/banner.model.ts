export class Banner {

  tTReferenceID: string;
  bannerUrl: string;
  bannerType: string;
  bannerTitle: string;
  bannerImgUrl: string;
  bannerDesc: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
