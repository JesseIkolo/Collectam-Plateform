const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    nickname: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        minlength: 3,
        maxlength: 30,
        match: [/^[a-zA-Z0-9_.-]+$/, 'Nom d\'utilisateur invalide'],
        // non requis, mais unique
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Email invalide'],
    },
    password: {
        type: String,
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
        required: true,
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
<<<<<<< Updated upstream
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
        match: [/^[a-zA-Z0-9_.-]+$/, 'Nom d\'utilisateur invalide'],
=======
    type: {
        type: String,
        enum: ['domestique', 'entreprise'],
        default: 'domestique',
>>>>>>> Stashed changes
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