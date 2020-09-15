(
  function ()  {
    'use strict';
  
      angular.module('myfirstapp',[])
      .controller('MyFirstController',function functionName($scope) {
          $scope.name="Neha Mishra";
          $scope.sayHello=function () {
            return "Hello Coursera";
          };
      });
  }
)();
