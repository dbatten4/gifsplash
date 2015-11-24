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

    var httpBackend;
    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend
      httpBackend
        .expectGET("http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=hello")
        .respond(
          { sampleGif : sampleGif } 
        );
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.sampleGif).toEqual(sampleGif);
    });
  });
});
