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
        })
    
        .when("/signup", {
            templateUrl: "views/signup.html",
            controller: "signupController"
        })
            
        .when("/login", {
            templateUrl: "views/login.html",
        })
        // .when("/trade", {
        //   templateUrl: "views/tradeView.html",
        //   controller: "tradeController"
        // });
    });
