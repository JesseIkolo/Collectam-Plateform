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
const cookieParser = require('cookie-parser');


// Charger les variables d'environnement
dotenv.config();
console.log('CORS_ORIGIN (env):', process.env.CORS_ORIGIN);

const app = express();
// CORS (doit être AVANT helmet, rate limiter, etc.)
app.use(cors({
    origin: function (origin, callback) {
        const allowed = (process.env.CORS_ORIGIN || '').split(',').map(o => o.trim());
        console.log('--- > CORS Origin autorisées:', allowed);
        console.log('--- > CORS Origin reçue:', origin);
        if (!origin || allowed.includes(origin)) {
            callback(null, true);
        } else {
            console.error(`CORS refusé pour l'origine: ${origin}`);
            callback(new Error('CORS_NOT_ALLOWED'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));

// Middleware pour parser les cookies
app.use(cookieParser());




// Middlewares globaux
app.use(express.json());

// Sécurité HTTP
app.use(helmet());
// Chemin pour les fichiers statiques (ex: images, documents)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Chemin pour les fichiers de logs
app.use('/logs', express.static(path.join(__dirname, 'logs')));

// Middleware pour parser les données de formulaire (multipart/form-data)
app.use(express.urlencoded({ extended: true }));
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
    .then(() => console.log('✅ Connectér à MongoDB'))
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB:', err);
        process.exit(1);
    });

// Importer les routes principales
const mainRoutes = require('./routes');
app.use('/api', mainRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ressource non trouvée' });
});

// Gestion des erreurs globales (inclut erreur CORS)
app.use((err, req, res, next) => {
    if (err && err.message === 'CORS_NOT_ALLOWED') {
        console.error('CORS interdit pour cette origine:', req.headers.origin);
        return res.status(403).json({
            message: 'CORS interdit : origine non autorisée',
            origin: req.headers.origin,
            error: err.message
        });
    }
    console.error('Erreur middleware global:', err.stack || err);
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
});

// Démarrage du serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
}); 