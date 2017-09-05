"use strict";
console.log("shroomFactory");

app.factory("shroomFactory", function($q, $http) {
    let getShrooms = () => {
        return $q((resolve, reject) => {
            $http.get(`https://mushroom-exercise-3e230.firebaseio.com/mushrooms.json`)
                .then((itemObject) => {
                    let itemCollection = itemObject.data;
                    console.log("Items in collection", itemCollection);
                    resolve(itemCollection);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    return { getShrooms };
});