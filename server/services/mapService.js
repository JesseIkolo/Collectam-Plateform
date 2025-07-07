const WastePoint = require('../models/WastePoint');

module.exports = {
    // Trouver les points proches d'une position (rayon en mètres)
    async findNearbyPoints({ lng, lat, radius = 1000, type }) {
        const query = {
            location: {
                $near: {
                    $geometry: { type: 'Point', coordinates: [lng, lat] },
                    $maxDistance: radius,
                },
            },
        };
        if (type) query.type = type;
        return WastePoint.find(query);
    },

    // Générer une heatmap (compter les points par zone)
    async getHeatmap({ type }) {
        return WastePoint.aggregate([
            ...(type ? [{ $match: { type } }] : []),
            {
                $group: {
                    _id: {
                        lng: { $round: [{ $arrayElemAt: ['$location.coordinates', 0] }, 2] },
                        lat: { $round: [{ $arrayElemAt: ['$location.coordinates', 1] }, 2] },
                    },
                    count: { $sum: 1 },
                },
            },
        ]);
    },

    // Préparation pour calcul d'itinéraires (à intégrer avec Google Maps/OSM côté front)
    async getPointsForRoute({ ids }) {
        return WastePoint.find({ _id: { $in: ids } });
    },
}; 