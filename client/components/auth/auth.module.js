'use strict';

angular.module('codemmunityAppApp.auth', [
  'codemmunityAppApp.constants',
  'codemmunityAppApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
