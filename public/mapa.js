function initialize() {
  var myLatLng = {lat: 32.4197712, lng: -115.0876732};
  var mapProp = {
    center:new google.maps.LatLng(32.4197712,-115.0876732),
    zoom:6,
    mapTypeId:google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);


  var markers = [];
  lecturas = [];
  lecturas.push({
    lat: 30,
    lng: -115,
    humidity: 0
  })

  lecturas.push({
    lat: 31,
    lng: -115,
    humidity: 1
  })

  lecturas.push({
    lat: 32,
    lng: -115,
    humidity: 2
  })

  lecturas.forEach(function(lectura) {
    var humidity = lectura.humidity;
    markers.push(new google.maps.Marker({
      position: {lat:Number(lectura.lat), lng:Number(lectura.lng)},
      map: map,
      icon: getPinImage(humidity),
      title: 'Hello World!'
    }));
  });


  $.ajax({
    url: 'lecturas',
    dataType: 'json',
    success: function(lecturas){
      lecturas.forEach(function(lectura) {
        var humidity = lectura.humidity;
        markers.push(new google.maps.Marker({
          position: {lat:Number(lectura.lat), lng:Number(lectura.lng)},
          map: map,
          icon: getPinImage(humidity),
          title: 'Hello World!'
        }));
      });      
    }
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

function getPinImage(pinColor) {
  var colorArray = ["FF0000","FFFF00","00FF00"];
  var img = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + colorArray[pinColor],
  new google.maps.Size(21, 34),
  new google.maps.Point(0,0),
  new google.maps.Point(10, 34));

  return img;
}
