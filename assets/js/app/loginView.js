angular.module('welcomePageApp.LoginView', [])
  .controller('LoginCtrl', function ($scope, $http, $state, $rootScope) {
    $scope.message = "Login";
    $scope.url = '/welcome/about';
    $scope.form = {
        firstName: "",
        lastName: "",
        password: ""
    }
   var oriPerson = angular.copy($scope.form);
    $scope.signup = function ($event) {
        var config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With':'XMLHttpRequest' }
        }
        $http.post('welcome/login', $.param($scope.form), config)
        .success(function (data, status, headers, config)
        {
          $rootScope.message = status;
          $state.go('error');
        })
        .error(function (data, status, headers, config)
        {
          $rootScope.message = status;
          $state.go('error');
        });

    }
}).directive('myCustomer', function() {
   return {
     restrict: 'E',
     template: '<div>Hello Chan</div>'
   };
 });
