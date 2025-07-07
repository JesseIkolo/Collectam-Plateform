const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    mission: { type: mongoose.Schema.Types.ObjectId, ref: 'Mission' },
    collector: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: {
        type: String,
        enum: ['active', 'used', 'expired'],
        default: 'active',
    },
    scannedAt: Date,
}, { timestamps: true });

module.exports = mongoose.model('QRCode', qrCodeSchema); 