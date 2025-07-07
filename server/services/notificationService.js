const Notification = require('../models/Notification');

module.exports = {
    async send({ type, to, user, message, meta }) {
        // Mock d'envoi (à remplacer par intégration réelle)
        let status = 'sent';
        try {
            // TODO: Intégrer Twilio, SendGrid, WhatsApp, etc.
            console.log(`[NOTIF] [${type}] à ${to}: ${message}`);
        } catch (err) {
            status = 'failed';
        }
        // Log en base
        await Notification.create({ type, to, user, message, status, meta });
        return status;
    },
}; 