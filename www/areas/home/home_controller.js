// home页面业务逻辑
angular.module('home.controller', ['home.service'])
  .controller('homeCtrl', function($scope, GlobalVariable,$window, $ionicSideMenuDelegate) {
    getHeaderSlideData();
    getNavData();
    headerChangeColor();
    goTop();
// initHeaderSlide();
    $scope.$on('$ionicView.enter',function(){
    	initHeaderSlide();
    })
     //侧栏切换
    $scope.toggleLeftSideMenu = function() {
       $ionicSideMenuDelegate.toggleLeft();
     };
     
    
    //获取轮播图数据
     function getHeaderSlideData(){
     		$scope.headerSlideData=[
     		{
     			src:'./img/home/slideHeader01.jpg'
     		},
     		{
     			src:'./img/home/slideHeader01.jpg'
     		},
     		{
     			src:'./img/home/slideHeader01.jpg'
     		},
     		{
     			src:'./img/home/slideHeader01.jpg'
     		}
     		]
     }
     // 初始化头部滚动条
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlide', {
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        observer:true,
        observeParents:true
       
      });
    }
    //获取导航栏数据
    function getNavData(){
    	$scope.navData=[
     		{
     			src:'./img/home/nav0.png',
     			title:'分类查询'
     		},
     		{
     			src:'./img/home/nav1.png',
     			title:'分类查询'
     		},
     		{
     			src:'./img/home/nav2.png',
     			title:'分类查询'
     		},
     		{
     			src:'./img/home/nav3.png',
     			title:'分类查询'
     		},
     		{
     			src:'./img/home/nav4.png',
     			title:'分类查询'
     		},
     		{
     			src:'./img/home/nav5.png',
     			title:'分类查询'
     		},
     		{
     			src:'./img/home/nav6.png',
     			title:'分类查询'
     		},
     		{
     			src:'./img/home/nav7.png',
     			title:'分类查询'
     		}
     		]
    }
    
    //改变头部颜色
//  function headerChangeColor(){
//  	var homeBg=$window.document.querySelector('.home-content');
//  	var homeHeader=document.querySelector('.home-header');
//  	var nowOpacity=0;
//  	homeBg.onscroll=function(e){
//  		if(this.scrollTop<200*0.85){
//  			nowOpacity=this.scrollTop/200;
//  		}
//  		homeHeader.style.background='rgba(0,0,0,'+nowOpacity+')';
//  	  console.log(nowOpacity);
//  	}
//  	
//  }
 function headerChangeColor(){
      var bg=$window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
      	if(this.scrollTop/250<.85){
          nowOpacity=this.scrollTop/250;
        }
       document.querySelector('.home-header').style.background='rgba(0,0,0,'+nowOpacity+')';
      }
    }
 //回顶部
 function goTop(){
 	   var bg=$window.document.getElementById('home-content');
 	   var goTop=document.querySelector('.goTop');
 	   bg.addEventListener('scroll',function(){
 	   	 if(this.scrollTop>200){
          goTop.style.opacity=1;
        }else{
        	goTop.style.opacity=0;
        }
 	   })
 	   $scope.goTop=function(){
 	   	 bg.scrollTop=0;
 	   }
 	   
// 	   goTop.addEventListener('click',function(){
// 	   	
// 	   })
 }
    
    
    
     
  })