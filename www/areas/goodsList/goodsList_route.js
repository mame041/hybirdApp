// goodsList页面子路由
angular.module('goodsList.route', ['goodsList.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('goodsList', {
        url: '/goodsList/:typeNumber',
        templateUrl: 'areas/goodsList/goodsList.html',
        controller: 'goodsListCtrl'
        })
  })