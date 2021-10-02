const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')
const Validation = require('../validations')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')
const isLoggedIn = require('../middlewares/isLoggedIn')

router.all('/api/*', isUserAuthenticated, isLoggedIn)

router.post('/auth/register',Validation.register() ,UserController.register)
router.post('/auth/login',UserController.login)
router.put('/api/change_password',UserController.changePassword)

module.exports = router;
