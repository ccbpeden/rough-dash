export class PartnerList {

  tTReferenceID: string;
  displayMap: string;
  partners: array;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
