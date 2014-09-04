angular.module('welcomePageApp.HomeView', [])
.controller('HomeCtrl', function($scope)
 {
   $('#myCarousel').carousel({ interval: 3000, cycle: true });
   $scope.message = "Chan ideals";
   $scope.images =[
     {src:'/assets/images/slide1.png', alt:'slide1', class:'active', index:0, caption:'image1'},
     {src:'/assets/images/slide2.png', alt:'slide2', class:'',index:1, caption:'image1'}
     ];
 });
