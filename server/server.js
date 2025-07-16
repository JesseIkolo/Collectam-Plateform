// server.js
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Middlewares globaux
app.use(express.json());

// Sécurité HTTP
app.use(helmet());

// CORS (à adapter selon domaine front)
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));

// Rate limiting (100 requêtes/15min/IP)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

// Logs HTTP (fichier + console)
const logStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: logStream }));
app.use(morgan('dev'));

// Connexion à MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/nacollect';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Connecté à MongoDB'))
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB:', err);
        process.exit(1);
    });

// Importer les routes principales
const mainRoutes = require('./routes');
app.use('/api', mainRoutes);

// Servir le frontend React en production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../webapp/build')));
    app.get('*', (req, res, next) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.join(__dirname, '../webapp/build', 'index.html'));
        } else {
            next();
        }
    });
}

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ressource non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
}); 