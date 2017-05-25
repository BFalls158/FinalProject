angular.module("BookBuddiesMod", ["ui.bootstrap", "ngAnimate", "ngRoute"])
    .config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/profile", {
            templateUrl: "views/myLibrary.html",
            controller: "profileController"
        })
        .when("/searchResults", {
            templateUrl: "views/searchResults.html"
        });
    });
