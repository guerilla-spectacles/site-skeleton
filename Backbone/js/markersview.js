var markersView = Backbone.View.extend({

	initialize: function(opts){
		var self = this;
		self.map = opts.map;
		self.render();
		console.log('here is map after installing from opts');
		console.log(map);
	},

	placeMarker: function(){
		console.log("Hi from placeMarker")
	},

	// Render stationary middle flag
	render: function(){
  		var flag = new google.maps.Marker({
  			position: map.center, 
		});
		flag.setMap(self.map);

console.log("Yeah I see you");
	},

});


