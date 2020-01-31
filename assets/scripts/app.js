'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  events.addEventHandlers()
  $('#exploreRestaurantsButton').hide()
  $('#getFavoritesButton').hide()
  $('#clearFavoritesButton').hide()
  $('#hideRestaurantsButton').hide()
  $('#footer').hide()
  $('#change-password-forms').hide()
  $('#cancel-change-password').hide()
  $('#password-success-message').hide()
  $('#password-fail-message').hide()
})
