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

  describe('when searching for a gif', function() {
    var sampleGif = [
      {
        "type": "gif",
        "id": "FiGiRei2ICzzG"
      }
    ];

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      expect(ctrl.searchResult.gifs).toEqual(sampleGif);
    });
  });
});
