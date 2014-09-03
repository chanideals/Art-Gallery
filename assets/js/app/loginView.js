angular.module('welcomePageApp.LoginView', [])
.config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    }])
.controller('LoginCtrl', function ($scope, $http) {
    $scope.message = "Login";
    $scope.url = '/welcome/about';
    $scope.form = {
        firstName: "",
        lastName: "",
        password: ""
    }
   var oriPerson = angular.copy($scope.form);
    $scope.signup = function ($event) {
      console.log($event);

        $.ajax({
            url: 'welcome/login',
            data: $scope.form,
            method: 'POST'
        }).success(function (data) {
            console.log(data);
         $scope.form = angular.copy(oriPerson);
         $scope.loginForm.$setPristine();
        });


        $http.post('welcome/login', $scope.form)
        .success(function (data, status, headers, config)
        {
          console.log(data);
        })
        .error(function (data, status, headers, config)
        {
          console.log(data);
        });

    }
}).directive('myCustomer', function() {
   return {
     restrict: 'E',
     template: '<div>Hello Chan</div>'
   };
 })
