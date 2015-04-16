var sidebars = Backbone.View.extend({
	el: '#info-contents',
	//events: '' : '',
	initialize: function(){
		this.render();

	},

	render: function(){
		$('#info-contents').append("<div id=\"guide-button-div\" class=\"info-dropdown center\">\
			<h2>Closest Curiosties</h2>\
			<p>\
				Magnis eros enim cursus. Et cursus adipiscing mauris ut aenean scelerisque tortor, facilisis adipiscing placerat scelerisque auctor platea, arcu in habitasse nunc pellentesque! Ut auctor et ut vel. In magna aliquet non! Ultrices sit sit nunc, enim turpis placerat ultricies dis lacus? Aliquet nec et in integer in ac elit placerat sed magna sagittis scelerisque! Sed! Urna! Egestas turpis hac enim nascetur arcu integer, risus augue sit ultrices facilisis egestas, massa amet, porttitor montes nisi, pulvinar est vut porttitor enim? Tincidunt? Mus, sed platea a etiam eu aliquam ut enim. Etiam risus porttitor adipiscing velit mus, urna dapibus, nec! Natoque placerat, urna, non in magna, nisi elit odio! Vel risus nunc urna mauris urna facilisis et urna facilisis rhoncus integer.\
			</p>\
			</div>");
		console.log("Exited render from sidebars");

	},

})