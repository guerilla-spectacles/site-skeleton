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
