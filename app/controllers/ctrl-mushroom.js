"use strict";
console.log("shroomCtrl");

app.controller("shroomCtrl", function($scope, shroomFactory) {

    shroomFactory.getShrooms()
        .then(function(itemCollection) {
            $scope.mushrooms = itemCollection;
            // console.log($scope);
        });

});