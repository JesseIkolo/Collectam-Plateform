const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validateInput');
const Joi = require('joi');
const authController = require('../controllers/authController');

// Schémas de validation
const registerSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    username: Joi.string().min(3).max(30).regex(/^[a-zA-Z0-9_.-]+$/).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
    identifier: Joi.string().required(), // email, phone ou username
    password: Joi.string().required(),
});

const otpSchema = Joi.object({
    email: Joi.string().email().required(),
    code: Joi.string().length(6).required(),
});

// Routes
router.post('/register', validateInput(registerSchema), authController.register);
router.post('/login', validateInput(loginSchema), authController.login);
router.post('/otp', validateInput(otpSchema), authController.verifyOTP);

module.exports = router; 