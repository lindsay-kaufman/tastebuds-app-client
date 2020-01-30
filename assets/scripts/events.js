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
    .catch(console.log('Error'))
}

const showChangePassword = function () {}
const onChangePassword = function () {}

const addEventHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password-forms').on('submit', onChangePassword)
  $('#change-password-button').on('click', showChangePassword)
}

module.exports = {
  addEventHandlers
}
