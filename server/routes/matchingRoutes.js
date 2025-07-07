const express = require('express');
const router = express.Router();
const matchingService = require('../services/matchingService');
const authJWT = require('../middlewares/authJWT');

// Trouver le meilleur collecteur
router.get('/best-collector', authJWT(['manager', 'user']), async (req, res) => {
    const { lng, lat, wasteType } = req.query;
    try {
        const collector = await matchingService.findBestCollector({
            lng: parseFloat(lng),
            lat: parseFloat(lat),
            wasteType,
        });
        res.json(collector);
    } catch (err) {
        res.status(400).json({ message: 'Erreur matching', error: err.message });
    }
});

// Assigner une mission
router.post('/assign', authJWT(['manager']), async (req, res) => {
    const { missionId, collectorId } = req.body;
    try {
        const mission = await matchingService.assignMission(missionId, collectorId);
        res.json(mission);
    } catch (err) {
        res.status(400).json({ message: 'Erreur assignation', error: err.message });
    }
});

module.exports = router; 