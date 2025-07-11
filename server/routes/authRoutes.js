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
    password: Joi.string().required(),
    identifier: Joi.string(),
    username: Joi.string(),
    phone: Joi.string(),
}).or('identifier', 'username', 'phone');


// Schéma pour la vérification OTP lors de l'inscription
const otpSchema = Joi.object({
    otp: Joi.string().length(6).required(),
    identifier: Joi.string(),
    username: Joi.string(),
    phone: Joi.string(),
}).or('identifier', 'username', 'phone');

const passwordResetRequestSchema = Joi.object({
    identifier: Joi.string(),
    username: Joi.string(),
    phone: Joi.string(),
}).or('identifier', 'username', 'phone');

const passwordResetOtpSchema = Joi.object({
    otp: Joi.string().length(6).required(),
    identifier: Joi.string(),
    username: Joi.string(),
    phone: Joi.string(),
}).or('identifier', 'username', 'phone');

const passwordUpdateSchema = Joi.object({
    password: Joi.string().min(8).required(),
    otp: Joi.string().length(6).required(),
    identifier: Joi.string(),
    username: Joi.string(),
    phone: Joi.string(),
}).or('identifier', 'username', 'phone');


// Auth routes
router.post('/register', validateInput(registerSchema), authController.register);
router.post('/login', validateInput(loginSchema), authController.login);
router.post('/verify-otp', validateInput(otpSchema), authController.verifyOTP);

// Password reset flow
router.post('/request-password-reset', validateInput(passwordResetRequestSchema), authController.requestPasswordReset);
router.post('/verify-reset-otp', validateInput(passwordResetOtpSchema), authController.verifyResetOtp);
router.post('/update-password', validateInput(passwordUpdateSchema), authController.updatePassword);

module.exports = router; 