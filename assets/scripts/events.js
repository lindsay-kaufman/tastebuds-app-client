const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailed)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch()
}

const showChangePassword = function () {
  $('#change-password-forms').show()
  $('#change-password-button').hide()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailed)
}

const onExploreRestaurants = function (event) {
  event.preventDefault()
  api.getRestaurants()
    .then(ui.getRestaurantsSuccess)
    .catch()
}

const addEventHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password-forms').on('submit', onChangePassword)
  $('#change-password-button').on('click', showChangePassword)
  $('#exploreRestaurantsButton').on('click', onExploreRestaurants)
}

module.exports = {
  addEventHandlers
}
