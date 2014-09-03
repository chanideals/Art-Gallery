angular.module('welcomePageApp.NavView', [])
.controller('NavCtrl', function ($scope, $http) {
   $scope.url = '/welcome/about';
   $scope.changed = function (keyEvent) {
       if (keyEvent.keyCode === 13) {
           $.ajax({
               url: '/welcome/about',
               data: keyEvent.target.value,
               method: 'POST'
           }).success(function (data) {
               console.log(data);
           });
          }
       }
});
