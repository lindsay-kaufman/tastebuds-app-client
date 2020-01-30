const store = require('./store')

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
  $('#homepage').hide()
  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  console.log('Successful Sign In')
}

const signInFailed = function () {
  $('#sign-in-message').show().html('Hmm... looks like something went wrong here. Try again!')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const signOutSuccessful = function () {
  $('#footer').hide()
  $('#homepage').show()
  console.log('Sign Out Successful')
}

module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful,
  signUpFailed,
  signInFailed
}
