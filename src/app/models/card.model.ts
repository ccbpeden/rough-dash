export class Card {

  addressReferenceId: string;
  cardCCV: string;
  cardExpiry: string;
  cardIdentifier: string;
  cardNumber: number;
  cardholderFirstName: string;
  cardholderLastName: string;
  cardholderMiddleInit: string;
  referenceUserId: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
