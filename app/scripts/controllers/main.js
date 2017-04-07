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

    $scope.quarterControlMap = [
        $scope.courses, $scope.supportCourses, $scope.eleCourses
    ];

    $scope.semCoreCourses = semCoreCourses;
    $scope.semCoreElective = semCoreElective;

    $scope.checkedQuarterCourses = {};
    $scope.checkedSemesterCourses = {};


    $scope.updateTotal = function() {
        // calculate
        // $scope.coreTotal += $scope.courses[i].credit;
        $scope.coreTotal = 0;
        for(var i = 0; i < $scope.courses.length; i++) {
            if ($scope.courses[i].check) {
                $scope.coreTotal += $scope.courses[i].credit;
            }
        }

        $scope.coreEleTotal = 0;
        for(var i = 0; i < $scope.eleCourses.length; i++) {
            if ($scope.eleCourses[i].check) {
                $scope.coreEleTotal += $scope.eleCourses[i].credit;
            }
        }

        $scope.coreSupportTotal = 0;
        for(var i = 0; i < $scope.supportCourses.length; i++) {
            if ($scope.supportCourses[i].check) {
                $scope.coreSupportTotal += $scope.supportCourses[i].credit;
            }
        }

		$scope.totalCredit1 = $scope.coreTotal 
								+ Math.min($scope.coreEleTotal, 23)
								+ Math.min($scope.coreSupportTotal, 43); 
		$scope.totalCredit2 = Math.round($scope.totalCredit1 / 1.5 * 10) / 10;
    }

    $scope.updateQuarterCheckStatus = function(type, index) {
        if ($scope.quarterControlMap[type][index].check) {
            $scope.checkedQuarterCourses[$scope.quarterControlMap[type][index].id] = true;
        } else {
            $scope.checkedQuarterCourses[$scope.quarterControlMap[type][index].id] = false;
        }             
        
    	$scope.updateTotal();
        $scope.updateSemCoreStatus();
    }

    $scope.updateSemCoreStatus = function() {
        // update equivalent status        
        // for core
        for(var i = 0; i < $scope.semCoreCourses.length; i++) {
            var missing = haveFullList($scope.semCoreCourses[i].equivalent, $scope.checkedQuarterCourses);
            if (missing.length == 0) {
                $scope.semCoreCourses[i].check = true;                
                $scope.semCoreCourses[i].status = 'Done';
                $scope.checkedSemesterCourses[$scope.semCoreCourses[i].id] = true;
            } else {
                $scope.semCoreCourses[i].check = false;
                $scope.checkedSemesterCourses[$scope.semCoreCourses[i].id] = false;
            }
        }
        // for elective 
        for(var i = 0; i < $scope.semCoreElective.length; i++) {
            var missing = haveFullList($scope.semCoreElective[i].equivalent, $scope.checkedQuarterCourses);
            if (missing.length == 0) {
                $scope.semCoreElective[i].check = true;                
                $scope.semCoreElective[i].status = 'Done';
                $scope.checkedSemesterCourses[$scope.semCoreElective[i].id] = true;
            } else {
                $scope.semCoreElective[i].check = false;
                $scope.checkedSemesterCourses[$scope.semCoreElective[i].id] = false;
            }
        }


        // update pre-requisite status
        // for core
        for(var i = 0; i < $scope.semCoreCourses.length; i++) {
            var missing = haveFullList($scope.semCoreCourses[i].prereq, $scope.checkedSemesterCourses);
            if (missing.length == 0) {
                $scope.semCoreCourses[i].ready = true;   
                if (!$scope.semCoreCourses[i].check) {
                    $scope.semCoreCourses[i].status = 'Ready to Take';    
                    if ($scope.semCoreCourses[i].comment) {
                        $scope.semCoreCourses[i].status += ': ' + $scope.semCoreCourses[i].comment;
                    }     
                }
            } else {
                $scope.semCoreCourses[i].ready = false;
                if (!$scope.semCoreCourses[i].check) {
                    $scope.semCoreCourses[i].status = 'Missing: ' + missing;
                }
            } 
        }
        // for elective
        for(var i = 0; i < $scope.semCoreElective.length; i++) {
            var missing = haveFullList($scope.semCoreElective[i].prereq, $scope.checkedSemesterCourses);
            if (missing.length == 0) {
                $scope.semCoreElective[i].ready = true;   
                if (!$scope.semCoreElective[i].check) {
                    $scope.semCoreElective[i].status = 'Ready to Take';    
                    if ($scope.semCoreElective[i].comment) {
                        $scope.semCoreElective[i].status += ': ' + $scope.semCoreElective[i].comment;
                    }     
                }
            } else {
                $scope.semCoreElective[i].ready = false;
                if (!$scope.semCoreElective[i].check) {
                    $scope.semCoreElective[i].status = 'Missing: ' + missing;
                }
            } 
        }
    }

    function haveFullList(reqCourses, checkedCoursesMap) {        
        var missing = [];
        if (reqCourses && reqCourses.length > 0) {
            for(var i = 0; i < reqCourses.length; i++) {
                if (!checkedCoursesMap[reqCourses[i]] || checkedCoursesMap[reqCourses[i]] == false) {
                    missing.push(reqCourses[i]);
                }
            }
        }
        return missing;
    }

    $scope.updateSemCoreStatus();

  });