export class MenuLink {

  enabled: boolean;
  iconStyle: string;
  menuItemURL: string;
  newTab: string;
  order: string;
  title: string;
  tTReferenceID: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
