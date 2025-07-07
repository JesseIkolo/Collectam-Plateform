const Vehicle = require('../models/Vehicle');

exports.createVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json(vehicle);
    } catch (err) {
        res.status(400).json({ message: 'Erreur création véhicule', error: err.message });
    }
};

exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find().populate('assignedTo');
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: 'Erreur récupération véhicules', error: err.message });
    }
};

exports.getVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id).populate('assignedTo');
        if (!vehicle) return res.status(404).json({ message: 'Véhicule non trouvé' });
        res.json(vehicle);
    } catch (err) {
        res.status(500).json({ message: 'Erreur récupération véhicule', error: err.message });
    }
};

exports.updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!vehicle) return res.status(404).json({ message: 'Véhicule non trouvé' });
        res.json(vehicle);
    } catch (err) {
        res.status(400).json({ message: 'Erreur mise à jour véhicule', error: err.message });
    }
};

exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) return res.status(404).json({ message: 'Véhicule non trouvé' });
        res.json({ message: 'Véhicule supprimé' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur suppression véhicule', error: err.message });
    }
}; 