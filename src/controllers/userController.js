// src/controllers/userController.js

const User = require('../models/userModel');
const responseHandler = require('../utils/responseHandler');

// User registration
exports.registerUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        responseHandler.success(res, 201, 'User registered successfully', newUser);
    } catch (error) {
        responseHandler.error(res, 400, 'User registration failed', error);
    }
};

// User login
exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await user.comparePassword(req.body.password))) {
            return responseHandler.error(res, 401, 'Invalid email or password');
        }
        responseHandler.success(res, 200, 'Login successful', user);
    } catch (error) {
        responseHandler.error(res, 500, 'Login failed', error);
    }
};

