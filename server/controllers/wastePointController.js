const WastePoint = require('../models/WastePoint');

exports.createWastePoint = async (req, res) => {
    try {
        const wastePoint = await WastePoint.create(req.body);
        res.status(201).json(wastePoint);
    } catch (err) {
        res.status(400).json({ message: 'Erreur création point', error: err.message });
    }
};

exports.getWastePoints = async (req, res) => {
    try {
        const wastePoints = await WastePoint.find().populate('reportedBy signals.user');
        res.json(wastePoints);
    } catch (err) {
        res.status(500).json({ message: 'Erreur récupération points', error: err.message });
    }
};

exports.getWastePoint = async (req, res) => {
    try {
        const wastePoint = await WastePoint.findById(req.params.id).populate('reportedBy signals.user');
        if (!wastePoint) return res.status(404).json({ message: 'Point non trouvé' });
        res.json(wastePoint);
    } catch (err) {
        res.status(500).json({ message: 'Erreur récupération point', error: err.message });
    }
};

exports.updateWastePoint = async (req, res) => {
    try {
        const wastePoint = await WastePoint.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!wastePoint) return res.status(404).json({ message: 'Point non trouvé' });
        res.json(wastePoint);
    } catch (err) {
        res.status(400).json({ message: 'Erreur mise à jour point', error: err.message });
    }
};

exports.deleteWastePoint = async (req, res) => {
    try {
        const wastePoint = await WastePoint.findByIdAndDelete(req.params.id);
        if (!wastePoint) return res.status(404).json({ message: 'Point non trouvé' });
        res.json({ message: 'Point supprimé' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur suppression point', error: err.message });
    }
}; 