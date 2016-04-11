'use strict';

class ProfileController {

  constructor($http, $scope, socket, $routeParams) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.userId = $routeParams.id;
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  
  }
}

angular.module('codemmunityAppApp')
  .controller('ProfileController', ProfileController);