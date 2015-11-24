gifsplashSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'http://api.giphy.com/v1/gifs/search';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'api_key': 'dc6zaTOxFJmzC'
        }
      });
    }
  }
}]);
