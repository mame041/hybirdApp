// cart页面路由  
angular.module('cart.route', ['cart.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'areas/cart/cart.html',
        controller: 'cartCtrl'
      })

  });
