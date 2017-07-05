import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AddressService {
  private addresses: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.addresses = db.list('/addresses');
  }

  getAddresses() {
    return this.addresses;
  }

  newAddress(address: Address) {
    this.addresses.push(address);
  }

  getAddressByKey(key: string){
    return this.db.list('/addresses' + key);
  }

  getAddressByReferenceUserId(referenceUserId: string) {
    return this.db.list('/addresses', {
      query: {
        orderByChild: 'referenceUserId',
        equalTo: referenceUserId
      }
    })
  }

  editAddress(key: string, values: Object = {}) {
    let addressInFirebase = this.getAddressByKey(key);
    if(!addressInFirebase){
      return null;
    }
    addressInFirebase.update(key, {values});
    return addressInFirebase;
  }

  deleteAddress(key: string) {
    let addressInFirebase = this.getAddressByKey(key);
    addressInFirebase.remove();
  }

}
