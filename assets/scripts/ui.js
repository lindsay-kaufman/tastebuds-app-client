const store = require('./store')
const restaurantsTemplate = require('./templates/restaurants-listings.handlebars')
// const fav = require('./templates/fav')

const signUpSuccessful = function () {
  $('#sign-up').hide()
  $('#sign-up-message').html('Thanks for signing up for TasteBuds! Sign in to start adding restaurants to your favorites.')
}

const signUpFailed = function () {
  $('#sign-up-message').show().html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signInSuccessful = function (response) {
  store.user = response.user
  console.log(response)
  $('#footer').show()
  $('#homepage-buttons').hide()
  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  // console.log('Successful Sign In')
}

const signInFailed = function () {
  $('#sign-in-message').show().html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const signOutSuccessful = function () {
  $('#footer').hide()
  $('#homepage-buttons').show()
  $('#change-password-message').hide()
  $('$change-password-forms').hide()
  console.log('Sign Out Successful')
}

const changePasswordSuccessful = function (response) {
  store.user = response.user
  console.log(response)
  $('#change-password-forms').hide()
  $('#change-password-button').show()
  $('#change-password-message').show().html('Password has been changed!')
}

const changePasswordFailed = function () {
  $('#change-password-forms').each(function () {
    this.reset()
  })
  $('#change-password-message').show().html('Hmm.. looks like something went wrong here. Try again!')
}

const getRestaurantsSuccess = function (data) {
  console.log(data)
  // const locationsHTML = 'getRestaurants Function Working'
  const locationsHTML = restaurantsTemplate({ locations: data.locations })
  $('#restaurants-content').html(locationsHTML)
}

module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful,
  signUpFailed,
  signInFailed,
  changePasswordSuccessful,
  changePasswordFailed,
  getRestaurantsSuccess
}
