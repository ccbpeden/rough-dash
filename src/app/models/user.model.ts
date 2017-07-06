export class User {
  accountLevel: string;
  addressReferenceId: string;
  avatarImageUrl: string;
  company: string;
  email: string;
  firstName: string;
  lastName: string;
  website: string;
  phoneNumber: string;
  uid: string;
  invoicePref: boolean;
  updatesPref: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
