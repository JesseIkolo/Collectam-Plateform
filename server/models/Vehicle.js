const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['camion', 'triporteur', 'voiture', 'autre'],
        required: true,
    },
    plate: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
    },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // collecteur ou groupe
    gps: {
        lat: Number,
        lng: Number,
        lastUpdate: Date,
    },
    stats: {
        missions: { type: Number, default: 0 },
        km: { type: Number, default: 0 },
    },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema); 