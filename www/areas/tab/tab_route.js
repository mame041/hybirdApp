// tab页面路由  为抽象路由  管理 页面下方四个页面的路由  
angular.module('tab.route', [
'tab.controller'
])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'areas/tab/tabs.html',
    controller:'tabCtrl'
  })

 
 
});