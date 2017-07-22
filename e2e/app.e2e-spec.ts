import { MegPage } from './app.po';

describe('meg App', () => {
  let page: MegPage;

  beforeEach(() => {
    page = new MegPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
