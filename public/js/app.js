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

=======
        .when("/signup", {
            templateUrl: "views/signup.html",
            controller: "signupController"
        })  
>>>>>>> 9814f5d358618832e770a486d1b4460339d11423
        .when("/login", {
            templateUrl: "views/login.html",
            controller: "loginController"
        })
<<<<<<< HEAD
        // .when("/trade", {
        //   templateUrl: "views/tradeView.html",
        //   controller: "tradeController"
        // });

=======
>>>>>>> 9814f5d358618832e770a486d1b4460339d11423
        .otherwise("/home");
    });
