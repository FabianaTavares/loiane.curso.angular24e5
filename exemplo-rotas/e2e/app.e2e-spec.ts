import { ExemploRotasPage } from './app.po';

describe('exemplo-rotas App', function() {
  let page: ExemploRotasPage;

  beforeEach(() => {
    page = new ExemploRotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
