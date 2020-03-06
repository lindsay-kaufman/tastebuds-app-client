// document.addEventListener('DOMContentLoaded', function() {
//   if (document.querySelectorAll('#map').length > 0) {
//     const jsFile = document.createElement('script')
//     // eslint-disable-next-line quotes
//     jsFile.type = 'text/javascript'
//     jsFile.src =
//       'http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyC8-eiMsBGW-FFpstCDSeIwTNwqkQRraKM&callback=initMap'
//     document.getElementsByTagName('head')[0].appendChild(jsFile)
//   }
// })

// let map

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {
//       lat: 42.358,
//       lng: -71.059
//     },
//     zoom: 12
//   })
// Create the search box and link it to the input
//   const input = document.getElementById('pac-input')
//   const searchBox = new google.maps.places.SearchBox(input)
//   const autocomplete = new google.maps.places.Autocomplete(input)
//   autocomplete.bindTo('bounds', map)

//   // Limit search results to maps current viewport
//   map.addListener('bounds_changed', function() {
//     searchBox.setBounds(map.getBounds())
//   })

//   // Data fields for autocomplete
//   autocomplete.setFields(['name', 'place_id', 'formatted_address', 'geometry'])

//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
// }

// let markers
// let bounds

// use this for GET request for favorites
// const plotMarkers = function(m) {
//   // call on get favorites?
//   markers = []
//   bounds = new google.maps.LatLngBounds()

//   m.forEach(function(marker) {
//     const position = new google.maps.LatLng(marker.lat, marker.lng)

//     markers.push(
//       new google.maps.Marker({
//         position: position,
//         map: map,
//         animation: google.maps.Animation.DROP
//       })
//     )
//     bounds.extend(position)
//   })
//   map.fitBounds(bounds)
// }
// fetch('markers.json')
// .then(function(response){return response.json()})
// .then(plotMarkers);
// https://www.sitepoint.com/introduction-to-the-fetch-api/

//   const infoWindow = new google.maps.InfoWindow()
//   let infoWindowContent
//   infoWindow.setContent(infoWindowContent)

//   const marker = new google.maps.Marker({ map: map })
//   marker.addListener('click', function() {
//     infoWindow.open(map, marker)
//   })

//   // Listen for event when the user selects a place and return details
//   autocomplete.addListener('place_changed', function() {
//     infoWindow.close()

//     const place = autocomplete.getPlace()
//     infoWindowContent = `
//       <div id="infowindow-content">
//         <span id="place-name" class="title">${place.name}</span><br>
//         <span id="place-id"></span><br>
//         <span id="place-address">${place.formatted_address}</span><br><br>
//         <span><button type="button" id="favorite-place-button">Add to Favorites</button></span>
//       </div>`
//     infoWindow.setContent(infoWindowContent)
//     if (!place.geometry) {
//       return
//     }

//     if (place.geometry.viewport) {
//       map.fitBounds(place.geometry.viewport)
//     } else {
//       map.setCenter(place.geometry.viewport)
//       map.setZoom(8)
//     }

//     // Set position of marker using place ID and location
//     marker.setPlace({
//       placeId: place.place_id,
//       location: place.geometry.location
//     })
//     console.log('Place: ', place)

//     marker.setVisible(true)

//     infoWindow.open(map, marker)
//   })
// }

// module.exports = {
//   initMap,
//   plotMarkers
// }
