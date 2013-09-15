var extend = require('xtend');
var maps = google.maps;

module.exports = convert;

function convert(mapOpts, markerOpts) {
  var todo = [].slice.call(document.querySelectorAll('.map-todo'));  

  todo.forEach(function(map) {
    map.classList.remove('map-todo');
    map.classList.add('map');

    var center = new maps.LatLng(
      map.dataset.latitude,
      map.dataset.longitude
    );

    var map = new maps.Map(map, extend({
      center: center,
      zoom: 15,
      mapTypeId: maps.MapTypeId.ROADMAP
    }, mapOpts));

    new maps.Marker(extend({
      position: map.getCenter(),
      map: map
    }, markerOpts));
  });
};

