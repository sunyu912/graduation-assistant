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
    'ngTouch',
    'directives.direction'
  ])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/table-main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


$(document).ready(function(){
        $(".nav a").on("click", function(){
         $(".nav").find(".active").removeClass("active");
         $(this).parent().addClass("active");
      });
    });
