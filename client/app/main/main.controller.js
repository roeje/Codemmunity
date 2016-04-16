'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.user = {};
    this.user.name = "John Smith";
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
}

angular.module('codemmunityAppApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
