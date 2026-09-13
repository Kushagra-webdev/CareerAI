const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const authRouter = express.Router();

/**
 * @routes Post /api/auth/register
 * @desc register a new user
 * @access public
 */

authRouter.post('/register', authController.registerController);

/**
 * @route Post /api/auth/login
 * @desc login a user
 * @access public
 */

authRouter.post('/login', authController.loginController);

/**
 * @route Get /api/auth/logout
 * @desc clear token from user cookies and add it to blacklist
 * @access public
 */

authRouter.get('/logout', authController.logoutController)

/**
 * @route Get /api/auth/get-me
 * @desc get the current logged in user details
 * @access private
 */

authRouter.get('/get-me', authMiddleware.authUser, authController.getMeController)

module.exports = authRouter;