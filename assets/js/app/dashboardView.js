angular.module('welcomePageApp.DashboardView', [])
.controller('DashboardCtrl', function($scope)
{
  $scope.message = "Dashboard";
  $scope.links = [
     {text:'Design', class:'active nav', index:0, href:'dashboard.design'},
     {text:'Build', class:'nav', index:1, href:'dashboard.build'},
     {text:'Run', class:'nav', index:2, href:'dashboard.run'},
     {text:'Art', class:'nav', index:3, href:'dashboard.art'}];
})
