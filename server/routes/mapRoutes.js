const express = require('express');
const router = express.Router();
const mapService = require('../services/mapService');
const authJWT = require('../middlewares/authJWT');

// Points proches
router.get('/nearby', authJWT(), async (req, res) => {
    const { lng, lat, radius, type } = req.query;
    try {
        const points = await mapService.findNearbyPoints({
            lng: parseFloat(lng),
            lat: parseFloat(lat),
            radius: parseInt(radius) || 1000,
            type,
        });
        res.json(points);
    } catch (err) {
        res.status(400).json({ message: 'Erreur recherche points proches', error: err.message });
    }
});

// Heatmap
router.get('/heatmap', authJWT(), async (req, res) => {
    const { type } = req.query;
    try {
        const heatmap = await mapService.getHeatmap({ type });
        res.json(heatmap);
    } catch (err) {
        res.status(400).json({ message: 'Erreur heatmap', error: err.message });
    }
});

// Points pour itinéraire
router.get('/route', authJWT(), async (req, res) => {
    const { ids } = req.query;
    try {
        const points = await mapService.getPointsForRoute({ ids: ids.split(',') });
        res.json(points);
    } catch (err) {
        res.status(400).json({ message: 'Erreur points itinéraire', error: err.message });
    }
});

module.exports = router; 