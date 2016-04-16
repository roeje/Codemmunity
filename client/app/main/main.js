'use strict';

angular.module('codemmunityAppApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      }).when('/profile/:id', {
        templateUrl: 'app/main/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'prof'
      });
  });