const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Email invalide'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    role: {
        type: String,
        enum: ['user', 'collector', 'manager', 'admin'],
        default: 'user',
    },
    phone: {
        type: String,
        trim: true,
    },
    otp: {
        code: String,
        expiresAt: Date,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    avatarUrl: String,
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
        match: [/^[a-zA-Z0-9_.-]+$/, 'Nom d\'utilisateur invalide'],
    },
}, { timestamps: true });

// Hash du mot de passe avant sauvegarde
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Méthode pour vérifier le mot de passe
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema); 