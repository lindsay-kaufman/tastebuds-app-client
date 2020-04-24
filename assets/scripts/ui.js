const store = require('./store')
const favoritesTemplate = require('./templates/favorites-listings.handlebars')

const signUpSuccessful = function () {
  $('#sign-up').hide()
}
// add signInSuccessful callback for automatic sign in

const signUpFailed = function () {
  $('.homepage-message')
    .show()
    .html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signInSuccessful = function (response) {
  store.user = response.user
  $('#map').show()
  $('#pac-input').show()
  $('#footer').show()
  $('#getFavoritesButton').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('favorite-place-button').hide()
  $('#navbar-message').show()
  $('#homepage-message').hide()
}

const signInFailed = function () {
  $('.homepage-message')
    .show()
    .html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const signOutSuccessful = function () {
  $('#sign-in').show()
  $('#sign-up').show()
  $('#footer').hide()
  $('#getFavoritesButton').hide()
  $('#clearFavoritesButton').hide()
  $('#favorites-content').hide()
  $('#restaurants-content').hide()
  $('.restaurants-title').hide()
  $('.favorites-title').hide()
  $('#pac-input').hide()
  $('#map').hide()
  $('#navbar-message').hide()
  $('#homepage-message').show()
}

const changePasswordSuccessful = response => {
  $('.change-password-message')
    .show()
    .html('Your password has been updated!')
  $('#change-password-forms').each(function () {
    this.reset()
  })
}

const changePasswordFailed = () => {
  $('#change-password-forms').each(function () {
    this.reset()
  })
  $('.change-password-message')
    .show()
    .html('Hmm.. looks like something went wrong here. Try again!')
}

const getFavoritesSuccess = response => {
  // // console.log(response)
  $('.favorites-title')
    .show()
    .html('Favorite Spots')
  const favoritesHTML = favoritesTemplate({ favorites: response.favorites })
  $('#favorites-content')
    .show()
    .html(favoritesHTML)
}

// const findFavoriteSuccess = response => {
//   console.log(response)
//   const map = document.getElementById('map')
//   const google = document.getElementById('google')
//   const marker = new google.maps.Marker({ map: map })
//   marker.setPlace({
//     placeId: response.favorite.place_id,
//     location: response.favorite.google_place_location
//   })

//   marker.setVisible(true)
// }

const failure = () => {
  // console.error(error)
}

module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful,
  signUpFailed,
  signInFailed,
  changePasswordSuccessful,
  changePasswordFailed,
  getFavoritesSuccess,
  // findFavoriteSuccess,
  failure
}
