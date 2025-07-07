const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

module.exports = (roles = []) => {
    // roles: string ou tableau de rôles autorisés
    if (typeof roles === 'string') roles = [roles];
    return async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Token manquant' });
        }
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            if (!req.user) return res.status(401).json({ message: 'Utilisateur non trouvé' });
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Accès interdit' });
            }
            next();
        } catch (err) {
            return res.status(401).json({ message: 'Token invalide ou expiré' });
        }
    };
}; 