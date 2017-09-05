"use strict";
console.log("shroomCtrl");

app.controller("shroomCtrl", function($scope, shroomFactory) {

    shroomFactory.getShrooms()
        .then(function(itemCollection) {
            //push items to array for search funtionality
            let shroomArray = [];
            let shrooms = Object.keys(itemCollection);
            shrooms.forEach((item) => {
                shroomArray.push(itemCollection[item]);
            });
            console.log("Shrooms", itemCollection);
            $scope.shrooms = shroomArray;
        });
});