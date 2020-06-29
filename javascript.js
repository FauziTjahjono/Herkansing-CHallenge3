// Weathermap code

                var input = document.querySelector(".inputTekst");
                var knop = document.querySelector(".knop");
                var temperatuur = document.querySelector(".temperatuur");
                var beschrijving = document.querySelector(".beschrijving");
                var locatie = document.querySelector(".locatie");
                var icoon = document.querySelector(".icoon");

                knop.addEventListener('click',function(name){
                    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=c04807fc38ec6e70129366083d7b68c4')
                    .then(response => response.json())
                    .then(data => {
                        var locatieValue = data['name'];
                        var temperatuurValue = data['main']['temp'];
                        var beschrijvingValue = data['weather'][0]['description'];
                        var icoonValue = data['weather'][0]['icon'];

                        locatie.innerHTML = locatieValue;
                        temperatuur.innerHTML = Math.round(temperatuurValue - 272.15) + " -° C";
                        beschrijving.innerHTML = beschrijvingValue;
                        icoon.innerHTML = `<img src="icons/${icoonValue}.png"/>`;

                    })

                    .catch(err => alert("Stad is onbekend."))

                })

mapboxgl.accessToken = 'pk.eyJ1IjoiZnRqYWhqb25vIiwiYSI6ImNrOTZ3emNhcTBqOWwzb3BjNTFhYWY3bGoifQ.Km68XB-mPb5ZDi41zSwzJQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [4.3235235, 52.0670253],
  zoom: 15
});
// add zoom in and zoom out function to map

map.addControl(new mapboxgl.NavigationControl());


var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.3235235, 52.0670253]
    },
   
      
      
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    
});

 

