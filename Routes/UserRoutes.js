const UserRoutes = require('express').Router()
const {registerController, loginController} = require('../Controller/loginSignup')

UserRoutes.post('/register',registerController)
UserRoutes.post('/login',loginController)

module.exports =UserRoutes