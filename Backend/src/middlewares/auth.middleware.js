const jwt = require('jsonwebtoken');
const tokenBlacklist = require('../models/blacklist.model');

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'No token found' });
    }

    const isBlackListed = await tokenBlacklist.findOne({ token });
    if (isBlackListed) {
        return res.status(401).json({ message: 'Token is blacklisted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = {authUser};