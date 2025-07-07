const Mission = require('../models/Mission');

exports.createMission = async (req, res) => {
    try {
        const mission = await Mission.create(req.body);
        res.status(201).json(mission);
    } catch (err) {
        res.status(400).json({ message: 'Erreur création mission', error: err.message });
    }
};

exports.getMissions = async (req, res) => {
    try {
        const missions = await Mission.find().populate('requester collector vehicle wastePoints business');
        res.json(missions);
    } catch (err) {
        res.status(500).json({ message: 'Erreur récupération missions', error: err.message });
    }
};

exports.getMission = async (req, res) => {
    try {
        const mission = await Mission.findById(req.params.id).populate('requester collector vehicle wastePoints business');
        if (!mission) return res.status(404).json({ message: 'Mission non trouvée' });
        res.json(mission);
    } catch (err) {
        res.status(500).json({ message: 'Erreur récupération mission', error: err.message });
    }
};

exports.updateMission = async (req, res) => {
    try {
        const mission = await Mission.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!mission) return res.status(404).json({ message: 'Mission non trouvée' });
        res.json(mission);
    } catch (err) {
        res.status(400).json({ message: 'Erreur mise à jour mission', error: err.message });
    }
};

exports.deleteMission = async (req, res) => {
    try {
        const mission = await Mission.findByIdAndDelete(req.params.id);
        if (!mission) return res.status(404).json({ message: 'Mission non trouvée' });
        res.json({ message: 'Mission supprimée' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur suppression mission', error: err.message });
    }
}; 