const User = require('../models/User');
const authService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const { name, email, password, phone, username } = req.body;
        // Vérifier unicité email, username, phone
        const existing = await User.findOne({
            $or: [
                { email },
                { username },
                { phone },
            ],
        });
        if (existing) {
            let field = 'identifiant';
            if (existing.email === email) field = 'email';
            else if (existing.username === username) field = 'nom d\'utilisateur';
            else if (existing.phone === phone) field = 'numéro de téléphone';
            return res.status(409).json({ message: `Ce ${field} est déjà utilisé` });
        }
        const user = new User({ name, email, password, phone, username });
        await user.save();
        await authService.generateOTP(user); // Envoi OTP
        res.status(201).json({ message: 'Inscription réussie. Vérifiez votre téléphone pour l’OTP.' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { identifier, password } = req.body;
        // Recherche par email, téléphone ou username
        const user = await User.findOne({
            $or: [
                { email: identifier },
                { phone: identifier },
                { username: identifier },
            ],
        }).select('+password');
        if (!user) return res.status(401).json({ message: 'Identifiant ou mot de passe invalide' });
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: 'Identifiant ou mot de passe invalide' });
        if (user.otp && user.otp.code) {
            return res.status(403).json({ message: 'Vérification OTP requise' });
        }
        const token = authService.generateToken(user);
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, username: user.username, role: user.role } });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        const { email, code } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        const valid = await authService.validateOTP(user, code);
        if (!valid) return res.status(400).json({ message: 'OTP invalide ou expiré' });
        res.json({ message: 'OTP validé. Vous pouvez vous connecter.' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
}; 