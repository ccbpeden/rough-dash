import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CardService {
  private cards: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.cards = db.list('/cards');
  }

  getCards() {
    return this.cards;
  }

  newCard(card: Card) {
    this.cards.push(card);
  }

  getCardByKey(key: string){
    return this.db.list('/cards' + key);
  }

  getCardByReferenceUserId(referenceUserId: string) {
    return this.db.list('/cards', {
      query: {
        orderByChild: 'referenceUserId',
        equalTo: referenceUserId
      }
    })
  }

  editCard(key: string, values: Object = {}) {
    let cardInFirebase = this.getCardByKey(key);
    if(!cardInFirebase){
      return null;
    }
    cardInFirebase.update(key, {values});
    return cardInFirebase;
  }

  deleteCard(key: string) {
    let cardInFirebase = this.getCardByKey(key);
    cardInFirebase.remove();
  }

}
