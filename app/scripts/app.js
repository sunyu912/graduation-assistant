'use strict';

/**
 * @ngdoc overview
 * @name graduationAssistantApp
 * @description
 * # graduationAssistantApp
 *
 * Main module of the application.
 */
angular
  .module('graduationAssistantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
