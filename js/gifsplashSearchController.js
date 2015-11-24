gifsplashSearch.controller('GifSplashSearchController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('http://api.giphy.com/v1/gifs/search');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm, api_key: "dc6zaTOxFJmzC"}
    );
  };

  self.getIframeSrc = function(src) {
    return 'http:\/\/giphy.com\/embed\/' + src
  };

}]);
