  var times = 0;
  var interval;
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(19.3580023,-99.2579486),
    zoom:20,
    mapTypeId:google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var markers = [];
  lecturas = [];
  lecturas.push({
    lat: 19.3580500,
    lng: -99.2578400,
    humidity: 0
  })

  lecturas.push({
    lat: 19.3580150,
    lng: -99.2579420,
    humidity: 1
  })

  lecturas.push({
    lat: 19.3579250,
    lng: -99.2579000,
    humidity: 2
  })

  lecturas.forEach(function(lectura) {
    var humidity = lectura.humidity;
    markers.push(new google.maps.Marker({
      position: {lat:Number(lectura.lat), lng:Number(lectura.lng)},
      map: map,
      icon: getPinImage(humidity),
      title: 'I/O HACK'
    }));
  });      
}
google.maps.event.addDomListener(window, 'load', initialize);

function loop() {
    $.ajax({
    url: 'lecturas',
    dataType: 'json',
    success: function(lecturas){
      times++;
      if(times == 3) clearInterval(interval);
    }
  });
}


function getPinImage(pinColor) {
  var colorArray = ["FF0000","FFFF00","00FF00"];
  var img = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + colorArray[pinColor],
  new google.maps.Size(21, 34),
  new google.maps.Point(0,0),
  new google.maps.Point(10, 34));

  return img;
}
