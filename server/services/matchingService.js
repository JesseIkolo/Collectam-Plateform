const User = require('../models/User');
const Mission = require('../models/Mission');
const Vehicle = require('../models/Vehicle');

module.exports = {
    // Trouver le collecteur optimal pour une mission
    async findBestCollector({ lng, lat, wasteType }) {
        // 1. Trouver les collecteurs actifs
        const collectors = await User.find({ role: 'collector', isActive: true });
        // 2. Calculer la distance (mock, à remplacer par géoloc réelle)
        // 3. Trier par note (mock: random), disponibilité (mock)
        // TODO: Intégrer la géolocalisation réelle et la note
        const sorted = collectors.sort(() => Math.random() - 0.5); // Mock random
        return sorted[0];
    },
    // Attribuer une mission automatiquement
    async assignMission(missionId, collectorId) {
        const mission = await Mission.findById(missionId);
        if (!mission) throw new Error('Mission non trouvée');
        mission.collector = collectorId;
        mission.status = 'assigned';
        await mission.save();
        return mission;
    },
}; 