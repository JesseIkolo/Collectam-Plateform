const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // usager
    collector: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // collecteur
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
    wastePoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WastePoint' }],
    wasteType: {
        type: String,
        enum: ['menager', 'recyclable', 'encombrant', 'autre'],
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'assigned', 'in_progress', 'completed', 'cancelled'],
        default: 'pending',
    },
    scheduledAt: Date,
    completedAt: Date,
    rating: {
        score: { type: Number, min: 1, max: 5 },
        comment: String,
    },
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // gestionnaire
}, { timestamps: true });

module.exports = mongoose.model('Mission', missionSchema); 