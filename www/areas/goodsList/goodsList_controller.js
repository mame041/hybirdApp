// goodsList页面业务逻辑
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('goodsListCtrl', function($scope,$stateParams,goodsListFty,$ionicLoading,$ionicHistory) {
       //和前台绑定数据
       $scope.obj_goodsListData=[];
       //控制是否还有更多数据可以加载
       $scope.pms_isMoreItemsAvailable=true;
       // // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };
     //视图事件
     $scope.$on('$ionicView.beforeEnter',function(e){
     	$scope.func_refreshGoodsList();
     })
     //下拉刷新方法
     $scope.func_refreshGoodsList=function(){
     	//分页页码
     	 $scope.obj_pagingInfo.pageNum=1;
     	//分页 商品类别
     	 $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
     	 //数据请求的参数
     	 var message=JSON.stringify($scope.obj_pagingInfo);
     	 //获取peomise对象
     	 var promise=goodsListFty.refreshGoodsList(message);
     	 //通过then方法触发监听
     	 promise.then(function(data){
     	 	 if(data){
     	 	 	 $scope.obj_goodsListData=data;
     	 	 	  $scope.pms_isMoreItemsAvailable=true;
     	 	 }else{
     	 	 	 $scope.pms_isMoreItemsAvailable=false;
     	 	 }
     	 },function(reason){
     	 	   	console.log(reason);
     	 }).finally(function() {
       // 停止广播ion-refresher
       $scope.$broadcast('scroll.refreshComplete');
     });
     	 
     	 
     }
     //上拉加载更多
     $scope.func_loadMoreGoodsList=function(){
     	//显示遮罩
     	$ionicLoading.show({
     		template:'正在加载数据....'
     	})
     	//分页页码
     	 $scope.obj_pagingInfo.pageNum++;
     	//分页 商品类别
     	 $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
     	 //数据请求的参数
     	 var message=JSON.stringify($scope.obj_pagingInfo);
     	  //获取peomise对象
     	 var promise=goodsListFty.loadMoreGoodsList(message);
     	 //通过then方法触发监听
     	 promise.then(function(data){
     	 	 if(data){
     	 	 	 $.each(data,function(i,v){
     	 	 	 	$scope.obj_goodsListData.push(v);
     	 	 	 })
     	 	 	  $scope.pms_isMoreItemsAvailable=true;
     	 	 }else{
     	 	 	 $scope.pms_isMoreItemsAvailable=false;
     	 	 }
     	 },function(reason){
     	 	   	console.log(reason);
     	 }).finally(function() {
     	 	setTimeout(function(){
     	 		$ionicLoading.hide();
     	 	},2000)
       // 停止广播ion-refresher
       $scope.$broadcast('scroll.infiniteScrollComplete');
     });
    }
     
     
     //返回前一页面方法
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }
     
  })