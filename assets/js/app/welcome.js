 var welcomePageApp = angular.module('welcomePageApp', ['ngRoute', 'ngAnimate', 'ui.router']);

	welcomePageApp.config(function($routeProvider, $locationProvider)
	{
    $routeProvider.otherwise({
		        redirectTo: '/#/'
		    });
    if(window.history && window.history.pushState){
			   // $locationProvider.html5Mode(true);
			  }
	})
.config(function($stateProvider){
      $stateProvider.state("about", {
      url:'/about',
      views: {
        "main": {
          templateUrl:'/assets/pages/about.php',
  				controller: 'AboutCtrl'
        },
        "side": {
          template: "<chart_thing/>"
        },
        "data": {
          template: "<data_thing/>"
        }
      }
  })
  .state("home", {
    url:'/',
    views: {
      "main": {
        templateUrl: "/assets/pages/home.php",
        controller: 'HomeCtrl'
      },
      "side": {
        template: "<h1>Side!</h1>"
      },
      "data": {
        template: "<data_thing/>"
      }
    }
  })
    .state("dashboard", {
    url:'/dashboard',
    views: {
      "main": {
        templateUrl: "/assets/pages/dashboard.php",
        controller: 'DashboardCtrl'
      },
      "dash-content@dashboard": {
        template: "<h1>Side!</h1>"
      }
    }
  })
  .state("dashboard.design", {
  url:'/design',
  views: {
    "dash-content": {
      template: "<h1>Design your app</h1>"
    }
  }
  })
  .state("dashboard.build", {
  url:'/build',
  views: {
    "dash-content": {
      template: "<h1>Build your app</h1>"
    }
  }
  })
  .state("dashboard.run", {
  url:'/run',
  views: {
    "dash-content": {
      template: "<h1>Run your app</h1>"
    }
  }
  })
  .state("login", {
    url:'/login',
    views: {
      "main": {
        templateUrl: "/assets/pages/login.php",
        controller: 'LoginCtrl'
      },
      "side": {
        template: "<h1>Side!</h1>"
      },
      "data": {
        template: "<data_thing/>"
      }
    }
  });
})
  .controller('MainCtrl', function($scope, $filter, $state) {
   $scope.Title = 'Chan Ideals';
   $state.go('home')
   $scope.filteredText = $filter('uppercase')($scope.originalText);

   $scope.links = [
      {text:'Design', class:'active nav', index:0, href:'dashboard.design'},
      {text:'Build', class:'nav', index:1, href:'dashboard.build'},
      {text:'Run', class:'nav', index:2, href:'dashboard.run'}];

   $scope.templates =
      [ { name: 'Primary', url: '/temp1.html' , href:'/about' },
        { name: 'Secondary', url: '/temp2.html', href:'/about'},
        {name: 'Optional', url: '/temp3.html', href:'/'} ];

    $scope.template = $scope.templates[0];

    $scope.setTemplate = function(index)
    {
    	$scope.template = $scope.templates[index];
    }

 })
  .controller('HomeCtrl', function($scope)
 	{
 		$scope.message = "Chan ideals";
 		$scope.images =[
 		  {src:'/assets/images/slide1.png', alt:'slide1', class:'active', index:0, caption:'image1'},
 		  {src:'/assets/images/slide2.png', alt:'slide2', class:'',index:1, caption:'image1'}
 		  ];
 	});

    welcomePageApp.controller('AboutCtrl', function($scope)
 	{
 		$scope.message = "About Chan ideals";
 	})
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
 	    }
 	}).directive('myCustomer', function() {
      return {
        restrict: 'E',
        templateUrl: '/assets/pages/about.php'
      };
    })
 	.controller('DashboardCtrl', function($scope)
 	{
 		$scope.message = "Dashboard";
 		$scope.templates =
      [ { name: 'Primary', url: '/assets/pages/about' , href:'about' },
        { name: 'Secondary', url: '/temp2.html', href:'login'},
        {name: 'Optional', url: '/temp3.html', href:'home'} ];
 	})
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
