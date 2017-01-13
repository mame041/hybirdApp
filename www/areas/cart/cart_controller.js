/**
 * 
 */
// cart页面业务逻辑
angular.module('cart.controller',['cart.service'])
  .controller('cartCtrl', function($scope, GlobalVariable,$stateParams,$state,$ionicHistory,IndexdbJs) {
     
     
     //初始化数量
     
     
     
     
      //减少数量
     $scope.func_reduceNumber=function(){
     	if($scope.obj_goodsDetailInfo.number>1){
     		$scope.obj_goodsDetailInfo.number--;
     		
     	}
     	
     }
      //增加数量
     $scope.func_addNumber=function(){
     	$scope.obj_goodsDetailInfo.number++;
     	
     }
     
     
     
      //返回前一页面方法
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }
     
     
  })