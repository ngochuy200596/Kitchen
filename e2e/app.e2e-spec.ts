import { Kitchen2Page } from './app.po';

describe('kitchen2 App', () => {
  let page: Kitchen2Page;

  beforeEach(() => {
    page = new Kitchen2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
