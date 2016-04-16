'use strict';

(function() {

function UserResource($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller: 'password'
      }
    },
    update: {
      method: 'PUT',
      params: {
        controller: 'update'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    }
  });
}

angular.module('codemmunityAppApp.auth')
  .factory('User', UserResource);

})();
