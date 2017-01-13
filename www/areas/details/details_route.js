// details页面路由  
angular.module('details.route', ['details.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('details', {
        url: '/details/:productId',
        templateUrl: 'areas/details/details.html',
        controller: 'detailsCtrl'
      })

  });
