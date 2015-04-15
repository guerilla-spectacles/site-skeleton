var scoutMap = Backbone.Model.extend({
	el: '#google-map',

	initialize: function(opts){
		var self = this;
		self.render();
		console.log('here is map, and then self.map');
		console.log(map);
		console.log(self.map);
		var locationFlag = new markersView({map: map});
		console.log('here is location flag');
		console.log(locationFlag);
		console.log(locationFlag.placeMarker);
		//var scoutPlace = new scoutMapView({map: map});
		google.maps.event.addListener(map, 'click', function(event) {
  			locationFlag.placeMarker();
  		});
		//console.log(map);
	},

	render: function(){
		var mapProp = {
		    center:new google.maps.LatLng(45.5200,-122.6819),
		    zoom:14,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		};
  		self.map = new google.maps.Map(document.getElementById("google-map"),mapProp);
	},

})

/*
var scoutMapView = Backbone.View.extend({
	model: this.model,
	events: {
		'click #googleMap': 'placeMarker',

	},
	placeMarker: function(){
		console.log('heres a click');
  	/*	var moveMarker = new google.maps.Marker({
    		position: location,
    		map: map,
  		});
  		moveMarker.setMap(map); 
	},




})
*/
