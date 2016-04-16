'use strict';

class DashboardController {
  constructor(Auth) {
    this.errors = {};
    this.submitted = false;
    this.Auth = Auth;
    this.user = this.Auth.getCurrentUser();
    console.log(this.user)
  }
}

angular.module('codemmunityAppApp')
  .controller('DashboardController', DashboardController);
