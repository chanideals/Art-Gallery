angular.module('welcomePageApp.MainView', [])
.controller('MainCtrl', function($scope, $filter, $state) {
 $scope.Title = 'Chan Ideals';
 $state.go('home')
 $scope.filteredText = $filter('uppercase')($scope.originalText);
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
