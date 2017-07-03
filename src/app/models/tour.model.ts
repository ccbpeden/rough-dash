export class Tour {

  referenceUserId: string;
  tourName: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
