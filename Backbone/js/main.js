/* google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
  var myIcon='https://mapbuildr.com/assets/img/markers/hollow-pin-black.png';
    var mapOptions = {
        center: new google.maps.LatLng(45.517534,-122.648507),
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: false,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [ 
        	{ "stylers": [ { "saturation": -100 } ] },
        	{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#0099dd" } ] },
        	{ "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
        	{ "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#aadd55" } ] },
        	{ "featureType": "road.highway", "elementType": "labels", "stylers": [ { "visibility": "on" } ] },
        	{ "featureType": "road.arterial", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] },
        	{ "featureType": "road.local", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] },{ } ],
    }
    var mapElement = document.getElementById('google-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
		['Spot 1', 'This is spot 1. Blah blah. #this #that', 'undefined', 'undefined', 'undefined', 45.5136190, -122.6520430, 'img/map-marker-image.png'],
		['Spot 2', 'This is spot 2. Beep boop. #beep #boop', 'undefined', 'undefined', 'undefined', 45.5196190, -122.6590430, 'img/map-marker-selected.png'],
    ['Spot 3', 'This is spot 3. Blah blah. #this #that', 'undefined', 'undefined', 'undefined', 45.5316190, -122.6320430, 'img/map-marker-image.png'],
    ['Spot 4', 'This is spot 4. Beep boop. #beep #boop', 'undefined', 'undefined', 'undefined', 45.517555,  -122.631819, 'img/map-marker-image.png']
    ];
    for (i = 0; i < locations.length; i++) {
		if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
		if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
		if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
       	if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
       	if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        marker = new google.maps.Marker({
            icon: locations[i][7],
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            // desc: description,
            // tel: telephone,
            // email: email,
            // web: web,
            id: 'markerLayer'
        });
        
      // ADDS INFO WINDOW TO MARKER  
      // link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
      var myoverlay = new google.maps.OverlayView();
     	myoverlay.draw = function () {
        this.getPanes().markerLayer.id='markerLayer';
     };
     myoverlay.setMap(map);
 }

 ///////////INFO WINDOW CODE - might recycle for sidebar div /////////////

// function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
//   var infoWindowVisible = (function () {
//           var currentlyVisible = false;
//           return function (visible) {
//               if (visible !== undefined) {
//                   currentlyVisible = visible;
//               }
//               return currentlyVisible;
//            };
//        }());
//        iw = new google.maps.InfoWindow({maxWidth: 100});
//        google.maps.event.addListener(marker, 'click', function() {
//            if (infoWindowVisible()) {
//                iw.close();
//                infoWindowVisible(false);
//            } else {
//                var html= "<div style='color:#000;background-color: white;padding:5px;' class='infoWindow'><h4>"+title+"</h4><p>"+desc+"<p></div>";
//                iw = new google.maps.InfoWindow({content:html});
//                iw.open(map,marker);
//                infoWindowVisible(true);
//            }
//     });
//     google.maps.event.addListener(iw, 'closeclick', function () {
//         infoWindowVisible(false);
//     });
// }
}
*/

$(function(){
    curiousMap = new scoutMap()
});
console.log('butt')
