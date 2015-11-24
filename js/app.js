var gifsplashSearch = angular.module('GifSplashSearch', ['ngResource']).config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http:\/\/giphy.com\/embed\/**'
    ]);
});
