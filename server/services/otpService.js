const User = require('../models/User');

module.exports = {
    async generateOTP(user) {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min
        user.otp = { code, expiresAt };
        await user.save();
        // TODO: Envoyer l'OTP par SMS/WhatsApp (intégrer notificationService)
        console.log(`[OTP] Envoyé à ${user.phone}: ${code}`);
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