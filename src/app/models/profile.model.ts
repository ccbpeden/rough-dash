export class Profile {

  email: string;
  loadingPageLogoAltText: string;
  loadingPageLogoCaption: string;
  loadingPageLogoDescription: string;
  loadingPageLogoGalleryLinkOnClickEffect: string;
  loadingPageLogoGalleryLinkTarget: string;
  loadingPageLogoGalleryLinkUrl: string;
  loadingPageLogoTitle: string;
  loadingPageLogoUrl: string;
  profileCategoryReference: string;
  profileDescription: string;
  profileStatus: string;
  profileTitle: string;
  tTReferenceID: string;
  tags: string;
  telephone: string;
  website: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
