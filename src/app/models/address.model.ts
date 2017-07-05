export class Address {

  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  country: string;
  referenceUserId: string;
  state: string;
  zip: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
