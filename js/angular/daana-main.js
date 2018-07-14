// require('./angular.min');
// require('./angular-route');

var app=angular.module("daana",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/home/",{
        templateUrl:"index.html"
    });
});