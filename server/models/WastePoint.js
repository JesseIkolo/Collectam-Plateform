const mongoose = require('mongoose');

const wastePointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['ramassage', 'decharge', 'depot_sauvage'],
        required: true,
    },
    location: {
        type: { type: String, enum: ['Point'], required: true, default: 'Point' },
        coordinates: { type: [Number], required: true }, // [lng, lat]
    },
    address: String,
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photos: [String], // URLs Cloudflare
    videos: [String],
    description: String,
    status: {
        type: String,
        enum: ['active', 'resolved', 'archived'],
        default: 'active',
    },
    signals: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        date: Date,
        comment: String,
    }],
}, { timestamps: true });

wastePointSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('WastePoint', wastePointSchema); 