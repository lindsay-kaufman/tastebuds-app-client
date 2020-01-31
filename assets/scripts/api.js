const config = require('./config.js')
const store = require('./store.js')

const signUp = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getRestaurants = function() {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET'
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

const addToFavorites = (location) => {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      favorite: {
        user_id: store.user.id,
        location_id: location
      }
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

const removeFavorite = (id) => {
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
  getRestaurants,
  getFavorites,
  addToFavorites,
  updateFavorites,
  removeFavorite
}
