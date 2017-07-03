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
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
