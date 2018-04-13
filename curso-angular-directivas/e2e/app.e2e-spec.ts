import { CursoAngularDirectivasPage } from './app.po';

describe('curso-angular-directivas App', function() {
  let page: CursoAngularDirectivasPage;

  beforeEach(() => {
    page = new CursoAngularDirectivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
