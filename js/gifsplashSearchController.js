gifsplashSearch.controller('GifSplashSearchController', [function() {
  var self = this;

  self.doSearch = function() {
    self.searchResult = {
      "gifs": [
        {
          "type": "gif",
          "id": "FiGiRei2ICzzG"
        }
      ]
    };
  };

  self.getIframeSrc = function(src) {
    return 'http:\/\/giphy.com\/embed\/' + src
  }

}]);
