export class InfoLink {

  twitterUrl: boolean;
  tTReferenceID: string;
  pinterestUrl: string;
  instagramUrl: string;
  gPlusUrl: string;
  facebookUrl: string;
  customLinks: [];
  Friday: string;
  Monday: string;
  Saturday: string;
  Sunday: string;
  Thursday: string;
  Tuesday: string;
  Wednesday: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
