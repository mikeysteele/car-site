describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("Car Site");
  });

  it('should have <header>', function () {
    expect(element(by.css('app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', function () {
    expect(element(by.css('app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', function () {
    expect(element(by.css('header .title')).getText()).toEqual('Car Site');
  });

  it('should have <footer>', function () {
      expect(element(by.css('app footer')).getText()).toEqual("Car Site &copy; 2017 Car Site Pty Ltd");
  });

});
