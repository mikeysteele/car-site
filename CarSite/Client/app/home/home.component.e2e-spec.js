describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <app-home>', function () {
    var home = element(by.css('app app-home'));
    expect(home.isPresent()).toEqual(true);
  });

});
