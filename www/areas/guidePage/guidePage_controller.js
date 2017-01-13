// guidePage页面业务逻辑
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope, $state) {
     var guideSlide = new Swiper ('.swiper-container', {
     // 如果需要分页器
    	pagination: '.swiper-pagination'
    	
      })        
     $scope.func_goHome=function(){
     	$state.go('tab.home');
     }
  })