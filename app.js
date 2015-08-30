(function(){
	var app = angular.module('carCatalog',[]);

	app.controller('StoreController',function($scope){
		$scope.products = cars;
	});


	app.controller('PanelController',function($scope){
	  	$scope.tab = 1;

	  	$scope.selectTab = function(setTab) {
	  		$scope.tab = setTab;
	   	};
	   	$scope.isSelected = function(checkTab){
	   		return $scope.tab === checkTab;
	   	}
  	});


  	app.controller("ReviewController", function($scope){
	  	$scope.review = {};
	  	
	  	$scope.addReview = function(product){
	  		$scope.review.createdOn = Date.now();
	  		product.reviews.push($scope.review);
	  		$scope.review = {};
	  	};
	});

  	

  	app.controller("AddController", function($scope){

  		$scope.addCar = function() {
  						
  			$scope.products.push({
  				brand: $scope.brand,
  				model: $scope.model,
  				reviews: []
  			});

  		};
  	});




	var cars = [
		{
			brand: "BMW",
			model: "X5",
			images: [
				"bmw/bmw.jpg",
				"bmw/bmw2.jpg",
				"bmw/bmw3.jpg"
			],
			description: "Inside, the X5 boasts an appealing, modern cabin design constructed from high-quality wood, metal and leather. A simple, straightforward quartet of analog gauges faces the driver, while the center stack houses a 10.2-inch infotainment screen that displays sound system, climate control and navigation system info. It's controlled by BMW's iDrive interface, which has evolved over the years into one of the most user-friendly infotainment systems in the industry. Redundant buttons and voice commands give users alternate means of accessing the electronics.",
			specification : "General Body Style: SUV Size: Midsize Market Segment: Luxury Weight: 4680 lbs Exterior Length: 193.2 in. Width: 76.3 in. Height: 69.4 in. Wheelbase: 115.5 in.",
			reviews: [
				{
					stars: 5,
					body: "At first it was an awkward premise. How many people in their right minds would actually want a Sport Activity Vehicle (SAV in BMW-Speak), which cuts into the cargo capacity of what turns out to essentially be an X5 Fastback? With global sales in excess of 250,000, apparently quite a few. As a result, the 2015 BMW X6 xDrive35i is back for its turn in this new longer, wider and taller second-generation model.",
					author: "Oleh",
					createdOn: 1397490980837	
				}
			]
		},
		{
			brand: "Mazda",
			model: "6",
			images: [
				"mazda/mazda61.jpg",
				"mazda/mazda62.jpg",
				"mazda/mazda63.jpg",
			],
			description: "Trunk-mounted Mazda6 badge aside, Mazda's latest midsize sedan shares virtually nothing in common with its predecessor.",
			specification : "General Body Style: Sedan Size: Midsize Market Segment: Standard Weight: 3268 lbs Exterior Length: 193.7 in. Width: 72.4 in. Height: 57.9 in. Wheelbase: 109.8 in.",
			reviews: [
				{
					stars: 5,
					body: "Sometimes cars imitate humans. Witness the Mazda6. Introduced to critical acclaim as a spunky midsize sedan about a decade ago, the original '6 was, like a middle schooler, a hoot but short on refinement. Its replacement was smarter and sharper but way more awkward. It made friends with almost nobody.",
					author: "Oleh",
					createdOn: 1397490980837	
				}
			]
		}
	];
})();