var sidebars = Backbone.View.extend({
	el: '#buttons',
	events: {
		'click #add-button' : 'popup',
		'click #guide-button' : 'popup',
		'click #about-button' : 'popup',
		'click #save' : 'save',
	},

	initialize: function(){
		oddity = "<div id=\"guide-button-div\" class=\"info-dropdown center\">\
			<h2>Closest Curiosties</h2>\
			<p>\
				HI HI HI Magnis eros enim cursus. Et cursus adipiscing mauris ut aenean scelerisque tortor, facilisis adipiscing placerat scelerisque auctor platea, arcu in habitasse nunc pellentesque! Ut auctor et ut vel. In magna aliquet non! Ultrices sit sit nunc, enim turpis placerat ultricies dis lacus? Aliquet nec et in integer in ac elit placerat sed magna sagittis scelerisque! Sed! Urna! Egestas turpis hac enim nascetur arcu integer, risus augue sit ultrices facilisis egestas, massa amet, porttitor montes nisi, pulvinar est vut porttitor enim? Tincidunt? Mus, sed platea a etiam eu aliquam ut enim. Etiam risus porttitor adipiscing velit mus, urna dapibus, nec! Natoque placerat, urna, non in magna, nisi elit odio! Vel risus nunc urna mauris urna facilisis et urna facilisis rhoncus integer.\
			</p>\
			</div>";

		about = "<div id=\"about-button-div\" class=\"info-dropdown center\">\
			<h2>About Curious Cities</h2>\
			<p>\
				Egestas hac in ultricies? Sagittis montes, phasellus risus, augue! Elementum, dignissim turpis! Duis tincidunt, cum! Diam ac habitasse nisi? Egestas mus vut! Amet lundium adipiscing nec nunc tortor pellentesque duis turpis lorem urna, eros, urna a, ac amet ultrices ac montes sit diam placerat vut sagittis, eu risus, cursus risus, in ut ac porta a, vel et magnis, vut risus odio nunc natoque in, ridiculus nisi, ut porttitor eu? Odio ac magnis duis odio. A. Risus placerat, ridiculus! A amet ultrices eros auctor pellentesque elementum. A elementum sed, pulvinar, vel, et scelerisque, scelerisque? Porta magna cursus, sociis sed? Et, natoque cursus scelerisque ac! Sit et urna odio sagittis amet facilisis! Magna sit cum cras.\
					Porta et dapibus sagittis pellentesque, sed et mauris pulvinar habitasse porta. Integer nunc risus. Nec, a habitasse sed integer, mauris augue sit, in. Mattis tincidunt, pulvinar, et! Aliquam urna enim in, scelerisque magna! Nec! Aenean amet ut purus amet, ac arcu magnis nunc vel tempor, in enim! Phasellus porttitor, sit. Platea ridiculus mattis dignissim ut ultricies rhoncus ac! Auctor, phasellus nisi enim eros, ultricies magnis tempor mattis platea nisi! Scelerisque cum! Dis ridiculus, nec? Tincidunt! A ultricies dis et! Pulvinar, aliquet etiam enim et porta in pulvinar ut ut? Cum cras, ac. Sit rhoncus, proin? Pulvinar sagittis elementum in, vel non, sed in pid, ac aenean rhoncus, scelerisque a porttitor, dis rhoncus turpis tempor arcu? Cursus urna tincidunt, lundium.\
					duis turpis lorem urna, eros, urna a, ac amet ultrices ac montes sit diam placerat vut sagittis, eu risus, cursus risus, in ut ac porta a, vel et magnis, vut risus odio nunc natoque in, ridiculus nisi, ut porttitor eu? Odio ac magnis duis odio. A. Risus placerat, ridiculus! A amet ultrices eros auctor pellentesque elementum. A elementum sed, pulvinar, vel, et scelerisque, scelerisque? Porta magna cursus, sociis sed? Et, natoque cursus scelerisque ac! Sit et urna odio sagittis amet facilisis! Magna sit cum cras.\
			</p>\
		</div>";
		
		addLoc = "<div id=\"add-button-div\" class=\"info-dropdown center\">\
			<h2>Add a new location</h2>\
			<form>\
				Select image<br>\
				<input type='file' class='form-button'>\
				<br>\
				Location Name:<br>\
				<input type='text' name='location-name' placeholder='Smallest Park'>\
				<br>\
				Description:<br>\
				<textarea id='description' name='location-description' maxlength='140' placeholder='What makes it interesting?'></textarea>\
				Category:<br>\
				<select name='oddity-type'>\
				<option value='Art'>Art</option>\
				<option value='Nature'>Nature</option>\
				<option value='Architecture'>Architecture</option>\
				<option value='Other'>Other</option>\
				</select>\
				<br>\
				<input type='submit' value='Submit'>\
			</form>\
		</div>";
		this.render();

	},

	render: function(){
		$('#info-contents').append(addLoc);

	},

	popup: function(event){
		event.preventDefault();
		$('#info-contents').children().remove();
		var target = $(event.target);
		var targetID = $(target).attr("id")
		//console.log(targetID);
		if (targetID == 'add-button'){
			$('#info-contents').append(addLoc);
		} else if (targetID == 'guide-button'){
			$('#info-contents').append(oddity);
		} else if (targetID == 'about-button'){
			$('#info-contents').append(about);
		};	
	},	

})