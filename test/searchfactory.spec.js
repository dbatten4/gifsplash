describe('factory: Search', function() {

  var search;

  beforeEach(module('GifSplashSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  var sampleGif = [
    {
      "type": "gif",
      "id": "FiGiRei2ICzzG"
    }
  ];

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=hello")
      .respond(
        [
          { "type": "gif",
            "id": "FiGiRei2ICzzG"
          }
        ]
      );
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
      .then(function(response) {
        expect(response.data).toEqual(sampleGif)
      })
    httpBackend.flush();
  });
});
