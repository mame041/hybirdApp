/**
 * 
 */
// details页面业务逻辑
angular.module('details.controller',['details.service'])
  .controller('detailsCtrl', function($scope, GlobalVariable,$stateParams,$state,$ionicHistory,IndexdbJs) {
     //购物车徽章数量
     $scope.obj_cartNumber={
     	count:0
     }
     
     //初始化购物车
     $scope.$on('$ionicView.beforeEnter',function(e){
     	IndexdbJs.getAll('cart',function(data){
     		for(var i=0;i<data.length;i++){
     			$scope.obj_cartNumber.count=parseInt($scope.obj_cartNumber.count)+parseInt(data[i].number);
     		}
     	},null);
     })
     
     
     
     // 通过后台获取到的商品详细信息数据
    $scope.obj_goodsInfo = {
      goodsId: "200067",
      description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise: "66",
      picture: [],
      src: "",
      isFork: false,
      colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
      sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
    };
     //用户选择商品信息
     $scope.obj_goodsDetailInfo={
	      goodsId: $scope.obj_goodsInfo.goodsId,
	      isFork: $scope.obj_goodsInfo.isFork,
	      description: $scope.obj_goodsInfo.description,
	      src: $scope.obj_goodsInfo.src,
	      prise: $scope.obj_goodsInfo.prise,
	      color: "",
	      size: "",
	      number: 1
     }
     
     //加入购物车
     $scope.addToCart=function(){
     	var obj_newData={};
     	//硬拷贝数据
     	angular.copy( $scope.obj_goodsDetailInfo,obj_newData);
     	//重新改变id
     	obj_newData.goodsId=obj_newData.goodsId+'-'+obj_newData.color+'-'+obj_newData.size;
     	
     	IndexdbJs.get(obj_newData.goodsId,'cart',function(data){
     		if(data==null||data==undefined){
     			//不存在则添加
     			IndexdbJs.add('cart',obj_newData,function(){
     				//变更商品数量
     				 $scope.obj_cartNumber.count=parseInt($scope.obj_cartNumber.count)+parseInt($scope.obj_goodsDetailInfo.number);
     			      //手动刷新
     			      $scope.$digest();
     			},null);
     		}else{
     			obj_newData.number=parseInt(obj_newData.number)+parseInt(data.number);
     		    IndexdbJs.update('cart',obj_newData,function(){
     		    	$scope.obj_cartNumber.count=parseInt($scope.obj_cartNumber.count)+parseInt($scope.obj_goodsDetailInfo.number);
     		    	//手动刷新
     			      $scope.$digest();
     		    },null);
     		}
     	},null);
     	
     	
     }
     
     
     
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