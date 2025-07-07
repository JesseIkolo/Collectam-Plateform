const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const JWT_EXPIRES_IN = '7d';

module.exports = {
    generateToken: (user) => {
        return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    },

    verifyToken: (token) => {
        return jwt.verify(token, JWT_SECRET);
    },

    async generateOTP(user) {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min
        user.otp = { code, expiresAt };
        await user.save();
        // TODO: Envoyer l'OTP par SMS/WhatsApp (mock ici)
        console.log(`OTP envoyé à ${user.phone}: ${code}`);
        return code;
    },

    async validateOTP(user, code) {
        if (!user.otp || user.otp.code !== code) return false;
        if (user.otp.expiresAt < new Date()) return false;
        user.otp = undefined;
        await user.save();
        return true;
    },
}; 