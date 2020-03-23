(function() {
  'use strict';
  angular.module('week1', [])
  .controller('textboxController', function($scope) {
    $scope.feedback="";
    $scope.validateLunch = function() {
      var userInput = $scope.lunchItem;
      if(userInput === undefined) {
        $scope.feedback="Please enter data first";
      } else {
        var foodItems = userInput.split(',');
        var foodItemscount = 0;
        for(var i=0;i<foodItems.length;i++) {
          if(foodItems[i].length > 0) {
            foodItemscount += 1;
          }
        }
        if(foodItemscount <= 3) {
          $scope.feedback="Enjoy!";
        } else {
          $scope.feedback="Too much!";
        }
      }
    }
  });
})();
