export class 360Photo {

  galleryReferenceId: string;
  sceneDefaultView: string;
  sceneDescription: string;
  sceneName: string;
  sceneURL: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
