var directionDirective = angular.module('directives.direction',[]);
directionDirective.directive('directions',function () {
  return{
    retrict:'E',
    templateUrl:"templates/directions.html"
  };
});
