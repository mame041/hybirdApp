/**
 * 全局路由  管理所有的路由  需要的模块为所有的路由
 */
angular.module('route', [
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',
  'goodsList.route',
  'details.route',
  'cart.route'
])

.config(function($stateProvider, $urlRouterProvider) {
   
   
// $urlRouterProvider.otherwise('/tab/home');
   $urlRouterProvider.otherwise('/guidePage');
});