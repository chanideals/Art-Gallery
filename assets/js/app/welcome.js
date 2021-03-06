 var welcomePageApp = angular.module('welcomePageApp', ['ngRoute', 'ngAnimate', 'ui.router',
                'welcomePageApp.AboutView',
                'welcomePageApp.LoginView',
                'welcomePageApp.DashboardView',
                'welcomePageApp.NavView',
                'welcomePageApp.HomeView',
                'welcomePageApp.MainView',
                'welcomePageApp.ArtView']);

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
    $stateProvider
    .state("about", {
      url:'/about',
      views: {
        "main": {
          templateUrl:'aboutTemplate.html',
  				controller: 'AboutCtrl'
        }
      }
  })
  .state("error", {
    views: {
      "main": {
        templateUrl:'errorTemplate.html'
      }
    }
})
  .state("home", {
    url:'/',
    views: {
      "main": {
        templateUrl: "homeTemplate.html",
        controller: 'HomeCtrl'
      }
    }
  })
    .state("dashboard", {
    url:'/dashboard',
    views: {
      "main": {
        templateUrl: "dashboardTemplate.html",
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
  .state("dashboard.art", {
  url:'/art',
  views: {
    "dash-content": {
      templateUrl: "artTemplate.html",
      controller: 'ArtCtrl'
    }
  }
  })
  .state("login", {
    url:'/login',
    views: {
      "main": {
        templateUrl: "loginTemplate.html",
        controller: 'LoginCtrl'
      }
    }
  });
});
