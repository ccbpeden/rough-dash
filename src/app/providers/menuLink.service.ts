import { Injectable } from '@angular/core';
import { MenuLink } from '../models/menuLink.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MenuLinkService {
  private menuLinks: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.menuLinks = db.list('/menuLinks');
  }

  getMenuLinks() {
    return this.menuLinks;
  }

  newMenuLink(menuLink: MenuLink) {
    this.menuLinks.push(menuLink);
  }

  getMenuLinkByKey(key: string){
    return this.db.list('/menuLinks' + key);
  }

  getMenuLinksByTTID(tTID: string) {
    return this.db.list('/menuLinks', {
      query: {
        orderByChild: 'tTReferenceID',
        equalTo: tTID
      }
    })
  }

  editMenuLink(key: string, values: Object = {}) {
    let menuLinkInFirebase = this.getMenuLinkByKey(key);
    if(!menuLinkInFirebase){
      return null;
    }
    menuLinkInFirebase.update(key, {values});
    return menuLinkInFirebase;
  }

  deleteMenuLink(key: string) {
    let menuLinkInFirebase = this.getMenuLinkByKey(key);
    menuLinkInFirebase.remove();
  }

}
