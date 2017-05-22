angular.module("BookBuddiesMod", ["ui.bootsrap", "ngAnimate", "ngRoute"])
    .config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/profile", {
            templateUrl: "views/myLibrary.html"
        })
        .when("/searchresults", {
            templateUrl: "views/searchResults.html"
        }); 
    });
