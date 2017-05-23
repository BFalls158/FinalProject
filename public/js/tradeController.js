angular.module("BookBuddiesMod")
    .controller("tradeController", function($scope, apiService, dbService, emailService){
    	var user1 = {
    		name: 'book',
    		email: 'email',
    		title: 'title'
    	}
    	var user2 = {
    		name: 'other book',
    		email: 'bfalls1587@gmail.com',
    		title: 'other title'
    	}
    	emailService.sendEmail(user1, user2).then(function(response) {
    		console.log(response);
    	});
    });
