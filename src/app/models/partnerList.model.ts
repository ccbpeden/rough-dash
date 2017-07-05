export class PartnerList {

  tTReferenceID: string;
  displayMap: string;
  partners: Object[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
