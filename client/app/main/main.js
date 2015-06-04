'use strict';

angular.module('eoseriesApp')
  .config(function ($stateProvider)
  {
    $stateProvider
      .state('main',
      {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
