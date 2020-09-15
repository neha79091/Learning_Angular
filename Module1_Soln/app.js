(function()
{
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  function LunchCheckController($scope,$filter)
  {
  $scope.LunchList="";


  $scope.checkLunch=function()
    {
      if($scope.LunchList == ""){
        $scope.count = 0;
      }
      else{

        $scope.count=$scope.LunchList.split(',').length;
      }
      $scope.sayMessage="";




        if($scope.count == 0)
        {
          $scope.sayMessage= "Please Enter Data First";
        }
        else if($scope.count<=3)
        {
          $scope.sayMessage= "Enjoy";
        }
        else
        {$scope.sayMessage= "Too much";}


    };

  }


})();
