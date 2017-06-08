import { VisitingRoughDashPage } from './app.po';

describe('visiting-rough-dash App', () => {
  let page: VisitingRoughDashPage;

  beforeEach(() => {
    page = new VisitingRoughDashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
