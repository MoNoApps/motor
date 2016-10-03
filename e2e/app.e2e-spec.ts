import { MotorPage } from './app.po';

describe('motor App', function() {
  let page: MotorPage;

  beforeEach(() => {
    page = new MotorPage();
  });

  it('should display message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Motor: Rules As A Service');
  });
});
