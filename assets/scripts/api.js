const config = require('./config.js')
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getFavorites = () => {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addToFavorites = (placeName, placeId, placeGeometry, placeAddress) => {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      favorite: {
        user_id: store.user.id,
        google_place_id: placeId,
        google_place_name: placeName,
        google_place_location: placeGeometry,
        google_formatted_address: placeAddress
      }
    }
  })
}

const findFavorite = id => {
  return $.ajax({
    url: config.apiUrl + '/favorites/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateFavorites = (id, data) => {
  return $.ajax({
    url: config.apiUrl + '/favorites/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const removeFavorite = id => {
  return $.ajax({
    url: config.apiUrl + '/favorites/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getFavorites,
  addToFavorites,
  updateFavorites,
  removeFavorite,
  findFavorite
}
