// App.js by Susana Ruiz
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];

function LunchCheckController($scope, $filter) {
  $scope.checkListOfFood = function () {
    var message = calculateMenu($scope.lunchMenu);
    $scope.message = message;
  };


  function calculateMenu(string) {
    var message = 0;
    if (string.length == 0){
      message = "Please enter data first.";
    } else {
      var itemsMenu = string.split(",");
      if (itemsMenu.length == 0){
      } if (itemsMenu.length > 0 && itemsMenu.length < 4) {
        message = "Enjoy!!!";
      } else {
        message = "Too Much!!!";
      }
    }
    return message;
  };


};


})();
