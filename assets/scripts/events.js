const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api
    .signUp(data)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailed)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api
    .signIn(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
}

const onSignOut = function () {
  api
    .signOut()
    .then(ui.signOutSuccessful)
    .catch()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api
    .changePassword(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailed)
}

const onViewFavorites = event => {
  event.preventDefault()
  api
    .getFavorites()
    .then(ui.getFavoritesSuccess)
    .catch(ui.failure)

  $('#clearFavoritesButton').show()
  $('#getFavoritesButton').hide()
}

const onHideFavorites = () => {
  $('#clearFavoritesButton').hide()
  $('#getFavoritesButton').show()
  $('#favorites-content').hide()
  $('.favorites-title').hide()
}

const onAddFavorite = event => {
  event.preventDefault()
  const placeName = $('#place-name').html()
  const placeId = $('#place-id').html()
  const placeGeometry = $('#place-geometry').html()
  const placeAddress = $('#place-address').html()
  api
    .addToFavorites(placeName, placeId, placeGeometry, placeAddress)
    .then(() => onViewFavorites(event))
    .catch(ui.failure)
}

const onUpdateFavorite = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const data = getFormFields(form)
  api
    .updateFavorites(id, data)
    .then(() => onViewFavorites(event))
    .catch(ui.failure)
}

const onRemoveFavorite = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api
    .removeFavorite(id)
    .then(() => onViewFavorites(event))
    .catch(ui.failure)
}

const onFindFavorite = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api
    .findFavorite(id)
    .then(ui.findFavoriteSuccess)
    .catch(ui.failure)
}

const addEventHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password-forms').on('submit', onChangePassword)
  $('#getFavoritesButton').on('click', onViewFavorites)
  $('#restaurants-content').on('click', '.create-favorite', onAddFavorite)
  $('#favorites-content').on('submit', '.update-favorite', onUpdateFavorite)
  $('#favorites-content').on('click', '.remove', onRemoveFavorite)
  $('#favorites-content').on('click', '.find', onFindFavorite)
  $('#clearFavoritesButton').on('click', onHideFavorites)
  $('.close').on('click', () => $('.change-password-message').html(''))
  $('#map').on('click', '#favorite-place-button', onAddFavorite)
}

module.exports = {
  addEventHandlers
}
