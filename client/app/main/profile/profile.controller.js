'use strict';

class ProfileController {

  constructor($http, $scope, socket, $routeParams) {
    this.$http = $http;
    this.socket = socket;
    console.log("okay");
    this.$http.get('/api/users/' + $routeParams.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  }

  getUserUrl() {
    
  }
}

angular.module('codemmunityAppApp')
  .controller('ProfileController', ProfileController);