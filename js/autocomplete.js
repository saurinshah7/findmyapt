var countryRestrict = { 'country': 'us' };

function initialize() {
 
  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), {
        types: ['geocode'],
        componentRestrictions: countryRestrict
      });
  
  google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);

  // Add a DOM event listener to react when the user selects a country.
  
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    alert(place.geometry.location.lat()+","+place.geometry.location.lng())
  } else {
    document.getElementById('autocomplete').placeholder = 'Enter a city';
  }

}

$(document).ready(function (){
initialize();
})