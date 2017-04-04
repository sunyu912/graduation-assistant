'use strict';

/**
 * @ngdoc function
 * @name graduationAssistantApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graduationAssistantApp
 */
angular.module('graduationAssistantApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.totalCreditGraduate1 = 180;
    $scope.totalCredit1 = 0;
    $scope.totalCredit2 = 0;
    $scope.totalCreditGraduate2 = 120;

    $scope.courses = coreCourses;
    $scope.coreTotal = 0;

    $scope.eleCourses = coreElective;
    $scope.coreEleTotal = 0;

    $scope.supportCourses = coreSupport;
	$scope.coreSupportTotal = 0;

    $scope.updateTotal = function() {
		$scope.totalCredit1 = $scope.coreTotal 
								+ Math.min($scope.coreEleTotal, 23)
								+ Math.min($scope.coreSupportTotal, 43); 
		$scope.totalCredit2 = Math.round($scope.totalCredit1 / 1.5 * 10) / 10;
    }

    $scope.updateCoreCredits = function() {
    	$scope.coreTotal = 0;
    	for(var i = 0; i < $scope.courses.length; i++) {
    		if ($scope.courses[i].check) {
    			$scope.coreTotal += $scope.courses[i].credit;
    		}
    	}	
    	$scope.updateTotal();	
    }

    $scope.updateElectiveCredits = function() {
    	$scope.coreEleTotal = 0;
    	for(var i = 0; i < $scope.eleCourses.length; i++) {
    		if ($scope.eleCourses[i].check) {
    			$scope.coreEleTotal += $scope.eleCourses[i].credit;
    		}
    	}	
    	$scope.updateTotal();	
    }

    $scope.updateSupportCredits = function() {
    	$scope.coreSupportTotal = 0;
    	for(var i = 0; i < $scope.supportCourses.length; i++) {
    		if ($scope.supportCourses[i].check) {
    			$scope.coreSupportTotal += $scope.supportCourses[i].credit;
    		}
    	}	
    	$scope.updateTotal();	
    }

  });