import { ETapestryPage } from './app.po';

describe('e-tapestry App', function() {
  let page: ETapestryPage;

  beforeEach(() => {
    page = new ETapestryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
