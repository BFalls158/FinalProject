angular.module("BookBuddiesMod")
	.service("emailService", function($http){

		this.sendEmail = function(user1, user2) {
			return $http({
				method: 'POST',
				url: '/email',
				data: {
					userName1: user1.name,
					userEmail1: user1.email,
					title1: user1.title,
					userName2: user2.name,
					userEmail2: user2.email,
					title2: user2.title,
				}
			}).then(function(response){
				return response.data;
			});
		}


	});