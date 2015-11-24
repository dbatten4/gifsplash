gifsplashSearch.controller('GifSplashSearchController', ['Search', function(Search) {
  var self = this;
  self.gifIds = [];

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResultArray = response.data.data;
        for (var i = 0; i < self.searchResultArray.length; i++) {
          src = self.searchResultArray[i]["id"]
          self.gifIds.push({'src': src});
        };
      });
    self.gifIds = [];
  };

  self.getIframeSrc = function(src) {
    return 'http:\/\/giphy.com\/embed\/' + src
  };

}]);
