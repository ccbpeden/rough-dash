export class Tour {

  referenceUserId: string;
  tourName: string;
  featuredImage: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
