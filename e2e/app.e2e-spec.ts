import { MotorPage } from './app.po';

describe('motor App', function() {
  let page: MotorPage;

  beforeEach(() => {
    page = new MotorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
