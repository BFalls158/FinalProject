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
<<<<<<< HEAD
    
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
=======
        .otherwise("/home");
>>>>>>> 041f630897141e21427a54043362a6309616ed23
    });
