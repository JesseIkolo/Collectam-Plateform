const WaitingUser = require('../models/WaitingUser');

exports.register = async (req, res) => {
    try {
        const { email, name, phone } = req.body;
        // Vérifier unicité de l'email
        const existing = await WaitingUser.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: 'Cet email est déjà inscrit à la waiting list.' });
        }
        const user = await WaitingUser.create({ email, name, phone });
        res.status(201).json({ message: 'Inscription à la waiting list réussie !', user });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
}; 