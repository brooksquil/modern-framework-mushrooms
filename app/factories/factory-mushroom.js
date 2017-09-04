"use strict";
console.log("shroomFactory");

// $q- angular promise- helps run asynchronus functions
// $http- angular equivalent of ajax calls
// no fat arrows for factory functions
app.factory("shroomFactory", function($q, $http) {

    let getShrooms = () => {
        let items = [];
        return $q((resolve, reject) => {
            $http.get('./data/mushrooms.json')
                // itemObject refers to data coming from call
                .then((itemObject) => {
                    //data is the "response" which angular returns, the property on the object
                    let itemCollection = itemObject.data;
                    console.log("data?", itemCollection);
                    resolve(itemCollection.mushrooms);

                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    // let getOneShroom = () => {
    //     console.log("getOneShroom");
    // };


    return { getShrooms };
});