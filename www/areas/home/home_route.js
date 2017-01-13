// home页面子路由
angular.module('home.route', ['home.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        views:{
        	//tab-home为 <ion-nav-view name="tab-home"></ion-nav-view>  师徒名字
        	'tab-home':{
        		 templateUrl: 'areas/home/home.html',
             controller: 'homeCtrl'
        	}
        }
       
      })
  })