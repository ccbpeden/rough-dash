export class Map {

  actualLat: string;
  defaultLat: string;
  actualLong: string;
  defaultLong: string;
  physicalAddress: boolean;
  tTReferenceID: string;
  zip: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
