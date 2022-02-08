//* validators/index.js
const register = require('./register.validator')
const login = require('./login.validator')
const shorten = require('./shorten.validator')
const redirect = require('./redirect.validator')

module.exports = {
    register,
    login,
    shorten,
    redirect
}