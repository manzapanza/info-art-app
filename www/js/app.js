// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

})

.controller('mainCtrl', function($scope, $localstorage) {
  $scope.setName = function(name) {
    if (name) {
      $localstorage.set('name', name.toLowerCase());
      console.log(name);
    }
  }
  $scope.getName = function() {
    alert($localstorage.get('name'));
  }
  $scope.setJob = function(job) {
    if (name) {
      $localstorage.set('job', job.toLowerCase());
      console.log(job);
    }
  }
  $scope.getJob = function() {
    alert($localstorage.get('job'));
  }
  $scope.saveAll = function(name, job) {
    if (name) {
      $localstorage.set('name', name.toLowerCase());
      console.log(name);
    }
    if (name) {
          $localstorage.set('job', job.toLowerCase());
          console.log(job);
        }
  }
})

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);