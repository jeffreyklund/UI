export class TortugaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tortuga-app h1')).getText();
  }
}
