import { RestaurantsAppPage } from './app.po';

describe('restaurants-app App', function() {
  let page: RestaurantsAppPage;

  beforeEach(() => {
    page = new RestaurantsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
