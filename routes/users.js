const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')
const Validation = require('../validations')

router.post('/auth/register',Validation.register() ,UserController.register)
router.post('/auth/login',UserController.login)

module.exports = router;
