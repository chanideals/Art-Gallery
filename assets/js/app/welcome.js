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
          templateUrl:'/assets/pages/about.php',
  				controller: 'AboutCtrl'
        }
      }
  })
  .state("error", {
    views: {
      "main": {
        templateUrl:'/assets/pages/error.php'        
      }
    }
})
  .state("home", {
    url:'/',
    views: {
      "main": {
        templateUrl: "/assets/pages/home.php",
        controller: 'HomeCtrl'
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
  .state("dashboard.art", {
  url:'/art',
  views: {
    "dash-content": {
      templateUrl: "/assets/pages/artPage.php",
      controller: 'ArtCtrl'
    }
  }
  })
  .state("login", {
    url:'/login',
    views: {
      "main": {
        templateUrl: "/assets/pages/login.php",
        controller: 'LoginCtrl'
      }
    }
  });
});
