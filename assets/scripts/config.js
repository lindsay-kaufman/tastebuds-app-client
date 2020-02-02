'use strict'

let apiUrl
const apiUrls = {
  production: 'https://lindsay-kaufman.github.io/tastebuds-app-client/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
