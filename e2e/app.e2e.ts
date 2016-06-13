import { TortugaPage } from './app.po';

describe('tortuga App', function() {
  let page: TortugaPage;

  beforeEach(() => {
    page = new TortugaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tortuga works!');
  });
});
