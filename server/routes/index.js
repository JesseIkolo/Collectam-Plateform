const express = require('express');
const router = express.Router();

// Auth routes
router.use('/auth', require('./authRoutes'));
// Missions
router.use('/missions', require('./missionRoutes'));
// Vehicles
router.use('/vehicles', require('./vehicleRoutes'));
// WastePoints
router.use('/wastepoints', require('./wastePointRoutes'));
// Cartographie
router.use('/maps', require('./mapRoutes'));
// Matching intelligent
router.use('/matching', require('./matchingRoutes'));

// TODO: Ajouter d'autres routes (collecte, missions, véhicules, etc.)

module.exports = router; 