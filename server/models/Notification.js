const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['sms', 'email', 'whatsapp', 'push'],
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'sent', 'failed'],
        default: 'pending',
    },
    meta: Object,
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema); 