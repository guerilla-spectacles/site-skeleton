var Buttons = Backbone.View.extend({
	el: '#buttons',

	events: {
		'click #add-button' : 'popup',
		'click #guide-button' : 'popup',
		'click #about-button' : 'popup',
		'click #save' : 'save',
	},

	initialize: function(){
			console.log('Hi from updatebutton')
	},

	popup: function(event){
		event.preventDefault();
		var target = $(event.target);
		var targetID = (target.attr("id") + "-div");
		console.log($(targetID));
		//var ellen = document.getElementByID(target + "-div");
		//console.log(ellen);
		$(targetID).toggleClass("hidden");
		$(targetID).siblings().addClass("hidden");
		//$("#guide-me-div").addClass("hidden");
		//$("#about-div").addClass("hidden");
	


	/* OLD CODE	
		event.preventDefault();
		var takeLocation = $("<div>Select Image<input type='file'></div>\
		<br>Location Name<input type='text'><br>\
		<button id='save' type='button'>Save!</button>");

		$('#addLocation').replaceWith($(takeLocation));
	END OLD CODE */	
	},

	save: function(event){
		event.preventDefault();
		
	}

})