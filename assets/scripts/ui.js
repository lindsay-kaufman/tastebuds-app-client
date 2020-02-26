const store = require('./store')
const restaurantsTemplate = require('./templates/restaurants-listings.handlebars')
const favoritesTemplate = require('./templates/favorites-listings.handlebars')

const signUpSuccessful = function() {
  $('#sign-up').hide()
  $('.homepage-message')
    .show()
    .html(
      'Thanks for signing up for TasteBuds! Sign in to start adding restaurants to your favorites.'
    )
}
// add signInSuccessful callback for automatic sign in

const signUpFailed = function() {
  $('.homepage-message')
    .show()
    .html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-up').each(function() {
    this.reset()
  })
}

const signInSuccessful = function(response) {
  store.user = response.user
  $('#map').show()
  $('#pac-input').show()
  $('#footer').show()
  $('#getFavoritesButton').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.homepage-message').hide()
  $('favorite-place-button').hide()
}

const signInFailed = function() {
  $('.homepage-message')
    .show()
    .html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-in').each(function() {
    this.reset()
  })
}

const signOutSuccessful = function() {
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
}

const changePasswordSuccessful = response => {
  $('.change-password-message')
    .show()
    .html('Your password has been updated!')
  $('#change-password-forms').each(function() {
    this.reset()
  })
}

const changePasswordFailed = () => {
  $('#change-password-forms').each(function() {
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
  failure
}
