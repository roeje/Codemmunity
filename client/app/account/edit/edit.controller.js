'use strict';

class EditController {
  constructor(Auth, $routeParams, $location) {
    this.location = $location;
    this.errors = {};
    this.submitted = false;
    this.Auth = Auth;
    this.user = this.Auth.getCurrentUser();
    if ($routeParams.id >= 0) {
      this.currentIndex = parseInt($routeParams.id);
      this.currentProject = this.user.projects[this.currentIndex];
      this.isNew = false;
      this.isEdit = true;
    } else {
      this.currentIndex = -1;
      this.currentProject = {};
      this.isNew = true;
      this.isEdit = false;
    }
    console.log(this.currentIndex)
    console.log(this.currentProject)
  }
  
  removeProject() {
    if (this.currentIndex > -1) {
      this.user.projects.splice(this.currentIndex, 1);
      this.Auth.updateProfile(this.user.projects)
      this.location.path("/dashboard");
    }
  }
  
  modifyDashboard(form) {
    this.submitted = true;
    if (form.$valid) {
      if (this.currentIndex < 0) {
        this.user.projects.push(this.currentProject);
      } else {
        this.user.projects[this.currentIndex] = this.currentProject;
      }
      this.Auth.updateProfile(this.user.projects)
        .then(() => {
          this.message = 'Updated project successfully.';
        })
        .catch(() => {
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('codemmunityAppApp')
  .controller('EditController', EditController);
