describe('GifSplashSearchController', function() {
  beforeEach(module('GifSplashSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GifSplashSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});
