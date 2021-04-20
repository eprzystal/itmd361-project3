function initMap() {
  var myLatlng = { lat: -0.2949097657383388, lng: -78.47546768010945};
     
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: myLatlng,
  });
  var marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Click to zoom",
  });
    map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => {
      featureType: "roadview";
    map.setZoom(19);
    map.setCenter(marker.getPosition());
  });  
  	var contentString = '<h1>Conocoto, Ecuador</h1><p>Located in the valley of the Andes Mountains, Conocoto is a suburb of Quito, Ecuador.  </p>';
   	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(Map, marker);
  	});
}

google.maps.event.addDomListener(window, 'load', init);