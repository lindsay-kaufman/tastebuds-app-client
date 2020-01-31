const store = require('./store')
const restaurantsTemplate = require('./templates/restaurants-listings.handlebars')
const favoritesTemplate = require('./templates/favorites-listings.handlebars')

const signUpSuccessful = function () {
  $('#sign-up').hide()
  $('.homepage-message').show().html('Thanks for signing up for TasteBuds! Sign in to start adding restaurants to your favorites.')
}

const signUpFailed = function () {
  $('.homepage-message').show().html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signInSuccessful = function (response) {
  store.user = response.user
  $('#footer').show()
  $('#change-password-button').show()
  $('#exploreRestaurantsButton').show()
  $('#getFavoritesButton').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.homepage-message').hide()
  // // console.log('Successful Sign In')
}

const signInFailed = function () {
  $('.homepage-message').show().html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const signOutSuccessful = function () {
  $('#sign-in').show()
  $('#sign-up').show()
  $('#footer').hide()
  $('.change-password-message').hide()
  $('#change-password-forms').hide()
  $('#exploreRestaurantsButton').hide()
  $('#getFavoritesButton').hide()
  $('#clearFavoritesButton').hide()
  $('#favorites-content').hide()
}

const changePasswordSuccessful = function (response) {
  store.user = response.user
  $('#change-password-forms').hide()
  $('#change-password-button').show()
  $('.change-password-message').show().html('Password has been changed!')
}

const changePasswordFailed = function () {
  $('#change-password-forms').each(function () {
    this.reset()
  })
  $('.change-password-message').show().html('Hmm.. looks like something went wrong here. Try again!')
}

const getRestaurantsSuccess = function (data) {
  // // console.log(data)
  const locationsHTML = restaurantsTemplate({ locations: data.locations })
  $('#restaurants-content').show().html(locationsHTML)
}

const getFavoritesSuccess = (response) => {
  // console.log(response)
  const favoritesHTML = favoritesTemplate({ favorites: response.favorites })
  // console.log(favoritesHTML)
  $('#favorites-content').html(favoritesHTML)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful,
  signUpFailed,
  signInFailed,
  changePasswordSuccessful,
  changePasswordFailed,
  getRestaurantsSuccess,
  getFavoritesSuccess,
  failure
}
