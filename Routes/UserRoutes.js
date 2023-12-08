const UserRoutes = require('express').Router()
const {registerController, loginController, ProfileController} = require('../Controller/loginSignup')
const middleware = require('../Middleware/middleware')

UserRoutes.post('/register',registerController)
UserRoutes.post('/login',loginController)
UserRoutes.post('/profile',middleware,ProfileController)

module.exports =UserRoutes