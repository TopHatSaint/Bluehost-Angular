// CONFIG
// ============================================================
angular.module("app",['ui.router']).config(function($stateProvider, $urlRouterProvider) {
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
});
