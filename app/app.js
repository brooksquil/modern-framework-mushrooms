"use strict";

var app = angular.module("mushrooms", ['ngRoute']);
//config-keyword to configure app
//$routeprovider- determines URL route
app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        //templateUrl- what template to use:
        templateUrl: 'partials/mushroom.html',
        //controller- what controller to use:
        controller: "shroomCtrl"
    }).

    otherwise('/');
});