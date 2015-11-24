gifsplashSearch.controller('GifSplashSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      });
  };

  self.getIframeSrc = function(src) {
    return 'http:\/\/giphy.com\/embed\/' + src
  };

}]);
