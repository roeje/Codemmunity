'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, $routeParams) {
    this.$http = $http;
    this.$http.get('/api/users/' + $routeParams.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    // });
  }
}

angular.module('codemmunityAppApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
