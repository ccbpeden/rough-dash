export class ThreeSixtyPhoto {

  galleryReferenceId: string;
  sceneDefaultView: string;
  sceneDescription: string;
  sceneName: string;
  sceneURL: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
