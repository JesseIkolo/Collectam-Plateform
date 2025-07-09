const mongoose = require('mongoose');

const waitingUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Email invalide'],
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    phone: {
        type: String,
        trim: true,
    },
    registeredAt: {
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        enum: ['particulier', 'entreprise'],
        required: true,
        default: 'particulier',
    },
});

module.exports = mongoose.model('WaitingUser', waitingUserSchema); 