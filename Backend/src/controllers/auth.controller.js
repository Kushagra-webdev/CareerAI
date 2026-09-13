const userModel = require('../models/user.model')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const tokenBlacklist = require("../models/blacklist.model")

/** 
 * @name   registerController
 * @description   register a new user 
 * @acces public
 */

async function registerController(req, res) {
    try {
        const { username, email, password } = req.body;
        
        //validate inputs
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please provide all the required fields' });
        }

        //check if user already exists
        const userExists = await userModel.findOne({ 
            $or : [
                {email},
                {username}
            ]
        });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hash = await bcrypt.hash(password, 10);

        //create new user
        const user = await userModel.create({ username, email, password:hash });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie('token', token)

        res.status(201).json({
            message: 'User registered successfully',
            user : {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


/**
 * @name loginController
 * @description   login a user
 * @acces public
 */

async function loginController(req, res) {
    try {
        const { email, password } = req.body;

        //validate inputs
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide all the required fields' });
        }

        //check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        //check password if valid
        const isPasswordValid = bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        //generate token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie('token', token)

        res.status(201).json({
            message: 'User logged in successfully',
            user : {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

/**
 * @name logoutController
 * @description   logout a user
 * @acces public
 */

async function logoutController(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No token found' });
    }
    try {
        await tokenBlacklist.create({ token });
        res.clearCookie('token');
        res.status(201).json({ message: 'User logged out successfully' });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

/**
 * @name getMeController
 * @description get current logged in user details
 * @access private
 */

async function getMeController(req, res) {
    try {
        const user = await userModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            message: 'User found successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {registerController, loginController, logoutController, getMeController};