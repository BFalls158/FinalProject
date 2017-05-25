angular.module("BookBuddiesMod")
  .controller("homeController", function($scope, $uibModal, $http, apiService, dbService, $log) {

        $scope.user = dbService.setCurrentUser();

        // $scope.tradeShow = false;

        $scope.tradeToggle = function(size) {
          var uibmodalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'views/requestTrade.html',
              controller: 'tradeController'
          })
        }


    	$scope.popularBooks = [
    	{
    		author:"F. Scott Fitzgerald",
			  description:"So we beat on, boats against the current, borne back ceaselessly into the past. ‘F. Scott Fitzgerald’s novel The Great Gatsby was first published on April 10, 1925. Set on Long Island’s North Shore and in New York City during the summer of 1922, it is the story of an attractive young man, hopelessly in love, who, having worked so hard to improve himself so he can win back the woman he loves, finds himself in a world where money has replaced humility and despair has replaced hope. For me, the novel is a comment on the values and cynicism of east coast America almost a hundred years ago, a time when a section of society had suddenly become very wealthy and the American Dream was for most, nothing more than the mere pursuit of money.’ Peter Joucla ‘Peter Joucla’s surprisingly clear-eyed adaptation cuts to the heart of Fitzgerald’s text while preserving a very decent amount of it.’ 4 stars –Evening Standard ‘Evoking all the glamour and atmosphere of the roaring twenties, Wilton’s brings Gatsby to glorious, all-singing, all-dancing life (jazz hands optional). A must-see’ – welovethisbook.com ‘An unashamed nostalgia party for a world we never knew... This is a show that majors in fun; and it’s no surprise to see it’s a cult hit.’ Telegraph",
			thumbnail:"http://books.google.com/books/content?id=0XYA1SlYNeMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			title:"The Great Gatsby"
    	},
    	{
    		author:"J.R.R. Tolkien",
			description:"The first volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. “A unique, wholly realized other world, evoked from deep in the well of Time, massively detailed, absorbingly entertaining, profound in meaning.” – New York Times",
			thumbnail:"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			title:"The Fellowship of the Ring"
    	},
    	{
    		author:"Suzanne Collins",
			description:"Every year, twelve boys and twelve girls are chosen to take part in the Hunger Games. Watched by the entire nation, this is action-packed reality TV at its most exciting - and most dangerous. Katniss Everdeen has grown up struggling to save the people close to her. Now she faces the biggest challenge of all - the fight for her life. Winning will make you famous. Losing means certain death",
			thumbnail:"http://books.google.com/books/content?id=v7SzRTH5mwgC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
			title:"The Hunger Games"
    	},
    	{
    		author:"Nicholas Sparks",
			description:"Includes 20 photos from the movie and a reading group guide. Every so often a love story so captures our hearts that it becomes more than a story-it becomes an experience to remember forever. The Notebook is such a book. It is a celebration of how passion can be ageless and timeless, a tale that moves us to laughter and tears and makes us believe in true love all over again... At thirty-one, Noah Calhoun, back in coastal North Carolina after World War II, is haunted by images of the girl he lost more than a decade earlier. At twenty-nine, socialite Allie Nelson is about to marry a wealthy lawyer, but she cannot stop thinking about the boy who long ago stole her heart. Thus begins the story of a love so enduring and deep it can turn tragedy into triumph, and may even have the power to create a miracle...",
			thumbnail:"http://books.google.com/books/content?id=Vv0og8FYLc8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title:"The Notebook"
    	},
    	{
    		author:"J.K. Rowling",
			description:"Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.",
			thumbnail:"http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title:"Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)"
    	}

    	//TODO Make call to dbService getting popular books (most instances of books in libraries)

    ]
  });
