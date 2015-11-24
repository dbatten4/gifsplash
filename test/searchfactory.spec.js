describe('factory: Search', function() {

  var search;

  beforeEach(module('GifSplashSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

});
