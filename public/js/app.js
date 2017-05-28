angular.module("BookBuddiesMod", ["ui.bootstrap", "ngAnimate", "ngRoute"])
    .config(function($routeProvider){
        $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "homeController"
        })
        .when("/profile", {
            templateUrl: "views/myLibrary.html",
            controller: "profileController"
        })
        .when("/searchResults", {
            templateUrl: "views/searchResults.html"
        })
        .when("/signup", {
            templateUrl: "views/signup.html",
            controller: "signupController"
        })
        .when("/login", {
            templateUrl: "views/login.html",
            controller: "loginController"
        })
        .otherwise("/home");
    });
