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
  $('#map').show()
  $('#footer').show()
  $('#exploreRestaurantsButton').show()
  $('#hideRestaurantsButton').hide()
  $('#getFavoritesButton').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.homepage-message').hide()
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
  $('#exploreRestaurantsButton').hide()
  $('#hideRestaurantsButton').hide()
  $('#getFavoritesButton').hide()
  $('#clearFavoritesButton').hide()
  $('#favorites-content').hide()
  $('#restaurants-content').hide()
  $('.restaurants-title').hide()
  $('.favorites-title').hide()
}

const changePasswordSuccessful = (response) => {
  $('.change-password-message').show().html('Your password has been updated!')
  $('#change-password-forms').each(function () {
    this.reset()
  })
}

const changePasswordFailed = () => {
  $('#change-password-forms').each(function () {
    this.reset()
  })
  $('.change-password-message').show().html('Hmm.. looks like something went wrong here. Try again!')
}

const getRestaurantsSuccess = function (data) {
  // // // console.log(data)
  $('.restaurants-title').show().html('Explore Our Restaurants')
  const locationsHTML = restaurantsTemplate({ locations: data.locations })
  $('#restaurants-content').show().html(locationsHTML)
}

const getFavoritesSuccess = (response) => {
  // // console.log(response)
  $('.favorites-title').show().html('Favorite Spots')
  const favoritesHTML = favoritesTemplate({ favorites: response.favorites })
  $('#favorites-content').show().html(favoritesHTML)
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
  getRestaurantsSuccess,
  getFavoritesSuccess,
  failure
}
