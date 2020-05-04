'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const store = require('./store.js')
const config = require('./config.js')
let map

$(() => {
  window.initMap = function () {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 42.358,
        lng: -71.059
      },
      zoom: 12
    })

    // --- SEARCH BOX --- //

    // Initialize search box and autocomplete
    const input = document.getElementById('pac-input')
    const searchBox = new google.maps.places.SearchBox(input)
    const autocomplete = new google.maps.places.Autocomplete(input)
    autocomplete.bindTo('bounds', map)

    // Limit search results to maps current viewport
    map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds())
    })

    // Data fields for autocomplete
    autocomplete.setFields([
      'name',
      'place_id',
      'formatted_address',
      'geometry'
    ])

    // Set search box to top left of map
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

    // --- SEARCH BOX UP END --- //

    // --- MARKERS & INFO WINDOWS --- //

    // Initialize info windows
    const infoWindow = new google.maps.InfoWindow()
    let infoWindowContent
    infoWindow.setContent(infoWindowContent)

    // Initialize markers and open info windows on 'click'
    let marker = new google.maps.Marker({ map: map })
    marker.addListener('click', function () {
      infoWindow.open(map, marker)
    })

    autocomplete.addListener('place_changed', function () {
      infoWindow.close()

      // Get 'place' information from Google API and show it in the info window
      // Use this information for API calls
      const place = autocomplete.getPlace()
      infoWindowContent = `
      <div id="infowindow-content">
        <span id="place-name" class="title">${place.name}</span><br>
        <span id="place-address">${place.formatted_address}</span><br><br>
        <span><button type="button" id="favorite-place-button">Add to Favorites</button></span>
        <span id="place-id">${place.place_id}</span><br>
        <span id="place-geometry">${place.geometry.location}</span>
      </div>`
      infoWindow.setContent(infoWindowContent)
      if (!place.geometry) {
        return
      }

      // Set place to the viewport
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport)
      } else {
        map.setCenter(place.geometry.viewport)
        map.setZoom(8)
      }

      // Set position of marker using place ID and location
      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location
      })
      // console.log(place.geometry.location)

      marker.setVisible(true)

      infoWindow.open(map, marker)
    })

    // --- MARKERS & INFO WINDOWS END --- //

    const favoriteTarget = document.getElementById('favorites-content')
    favoriteTarget.addEventListener('click', event => {
      event.preventDefault()
      const id = $(event.target).data('id')
      return $.ajax({
        url: config.apiUrl + '/favorites/' + id,
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + store.user.token
        }
      })
        .then(response => {
          const myLatlng = new google.maps.LatLng(response.favorite.google_place_location)
          marker = new google.maps.Marker({ map: map })
          marker.setPlace({
            placeId: response.favorite.google_place_id,
            location: myLatlng })
          marker.setVisible(true)

          infoWindow.open(map, marker)
        })
        .catch(error => console.error(error))
    })
  }

  events.addEventHandlers()
  $('#getFavoritesButton').hide()
  $('#clearFavoritesButton').hide()
  $('#footer').hide()
  $('#map').hide()
  $('#pac-input').hide()
  $('#navbar-message').hide()

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.defer = true
  script.async = true
  script.src = 'http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyC8-eiMsBGW-FFpstCDSeIwTNwqkQRraKM&callback=initMap'
  document.head.appendChild(script)
})
