'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var userCtrlStub = {
  index: 'userCtrl.index',
  destroy: 'userCtrl.destroy',
  me: 'userCtrl.me',
  changePassword: 'userCtrl.changePassword',
  update: 'userCtrl.update',
  show: 'userCtrl.show',
  create: 'userCtrl.create'
};

var authServiceStub = {
  isAuthenticated() {
    return 'authService.isAuthenticated';
  },
  hasRole(role) {
    return 'authService.hasRole.' + role;
  }
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var userIndex = proxyquire('./index', {
  'express': {
    Router() {
      return routerStub;
    }
  },
  './user.controller': userCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('User API Router:', function() {

  it('should return an express router instance', function() {
    userIndex.should.equal(routerStub);
  });

  describe('GET /api/users', function() {

    it('should verify admin role and route to user.controller.index', function() {
      routerStub.get
        .withArgs('/', 'authService.hasRole.admin', 'userCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/users/:id', function() {

    it('should verify admin role and route to user.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'authService.hasRole.admin', 'userCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/users/me', function() {

    it('should be authenticated and route to user.controller.me', function() {
      routerStub.get
        .withArgs('/me', 'authService.isAuthenticated', 'userCtrl.me')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/users/:id/password', function() {

    it('should be authenticated and route to user.controller.changePassword', function() {
      routerStub.put
        .withArgs('/:id/password', 'authService.isAuthenticated', 'userCtrl.changePassword')
        .should.have.been.calledOnce;
    });
    
  });
  
  describe('PUT /api/users/:id/update', function() {

    it('should be authenticated and route to user.controller.update', function() {
      routerStub.put
        .withArgs('/:id/update', 'authService.isAuthenticated', 'userCtrl.update')
        .should.have.been.calledOnce;
    });

  });
  
  
  describe('GET /api/users/:id', function() {

    it('should route to thing.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'userCtrl.show')
        .should.have.been.calledOnce;
    });

  });
  
  describe('POST /api/users', function() {

    it('should route to user.controller.create', function() {
      routerStub.post
        .withArgs('/', 'userCtrl.create')
        .should.have.been.calledOnce;
    });

  });

});
