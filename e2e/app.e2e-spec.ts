import { PruebaPage } from './app.po';

describe('prueba App', () => {
  let page: PruebaPage;

  beforeEach(() => {
    page = new PruebaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
