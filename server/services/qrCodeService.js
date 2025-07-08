const QRCode = require('qrcode');
const QRCodeModel = require('../models/QRCode');

module.exports = {
    async generate({ mission, collector }) {
        const code = `${mission || ''}-${collector || ''}-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
        const qr = await QRCode.toDataURL(code);
        const qrDoc = await QRCodeModel.create({ code, mission, collector });
        return { code, qr, qrId: qrDoc._id };
    },
    async validate(code) {
        const qrDoc = await QRCodeModel.findOne({ code, status: 'active' });
        if (!qrDoc) return false;
        qrDoc.status = 'used';
        qrDoc.scannedAt = new Date();
        await qrDoc.save();
        return true;
    },
}; 