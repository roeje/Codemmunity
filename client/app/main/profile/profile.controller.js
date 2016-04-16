'use strict';

// var user = {fName: "Jesse", lName: "Roe", pEmail: "roeje@mail.gvsu.edu",
//   projects: {
//     project1: {
//       tab1: {
//         title: "Haskell POS Homework",
//         language: "Haskell",
//         dateCreated: "04/10/2016",
//         repoUrl: "https://jessedroe@bitbucket.org/jessedroe/cis-343-haskell-pos-project.git"
//       },
//       tab2: {
//         image1: "http://www.just2good.co.uk/images/gif/controlUnit.gif"
//       },
//       tab3: {
//         image2: "http://media.moddb.com/images/downloads/1/26/25534/src_prv.jpg"
//       }
//     },
//     project2: {
//       tab1: {
//         title: "Python C4 Homework",
//         language: "Python",
//         dateCreated: "04/01/2016",
//         repoUrl: "https://jessedroe@bitbucket.org/jessedroe/cis-343-connect-4-in-python.git"
//       },
//       tab2: {
//         image1: "http://i.imgur.com/cFgVTWz.gifv"
//       },
//       tab3: {
//         image2: "https://www.appneta.com/blog/wp-content/uploads/2013/06/Java-API-1-1.png"
//       }
//     }
//   }
// }
  

class ProfileController {

  constructor($http, $scope, socket, $routeParams, Auth) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.userId = $routeParams.id;
    this.Auth = Auth;
    this.user = this.Auth.getCurrentUser();
    
    console.log(this.user);
    // this.userData = this.user.projects;
    console.log(this.userData);
    // this.$http.get('/api/users/' + this.userId).then(response => {
    //   this.user = response.data;
    //   console.log(this.user);
    // });
  }
}

angular.module('codemmunityAppApp')
  .controller('ProfileController', ProfileController);