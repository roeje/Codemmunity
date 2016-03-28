'use strict';

angular.module('codemmunityAppApp', [
  'codemmunityAppApp.auth',
  'codemmunityAppApp.admin',
  'codemmunityAppApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
