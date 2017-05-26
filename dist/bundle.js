// CONFIG
// ============================================================
angular.module("app",['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './views/homeTpml.html',
      controller: 'homeCtrl'
    });

  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("homeCtrl", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
