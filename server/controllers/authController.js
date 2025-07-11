// --- Password reset flow ---
const findUserByIdentifier = async ({ identifier, username, phone }) => {
  if (identifier) {
    return await User.findOne({
      $or: [
        { email: identifier },
        { phone: identifier },
        { username: identifier },
      ],
    });
  } else if (username) {
    return await User.findOne({ username });
  } else if (phone) {
    return await User.findOne({ phone });
  }
  return null;
};

exports.requestPasswordReset = async (req, res) => {
  try {
    const { identifier, username, phone } = req.body;
    const user = await findUserByIdentifier({ identifier, username, phone });
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    // Générer un OTP (6 chiffres)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = { code: otp, expiresAt: new Date(Date.now() + 10 * 60 * 1000) };
    await user.save();
    // Envoyer OTP par email ou SMS (ici console.log pour démo)
    console.log(`[BACKEND][PasswordReset] OTP pour ${user.email || user.phone || user.username}:`, otp);
    // TODO: Envoyer par email/SMS en prod
    res.json({ message: "OTP envoyé. Vérifiez votre boîte mail ou téléphone." });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.verifyResetOtp = async (req, res) => {
  try {
    const { otp, identifier, username, phone } = req.body;
    const user = await findUserByIdentifier({ identifier, username, phone });
    if (!user || !user.otp || !user.otp.code) return res.status(400).json({ message: "OTP non demandé ou utilisateur inconnu" });
    if (user.otp.code !== otp || (user.otp.expiresAt && user.otp.expiresAt < new Date())) {
      return res.status(400).json({ message: "OTP invalide ou expiré" });
    }
    res.json({ message: "OTP validé. Vous pouvez réinitialiser votre mot de passe." });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { password, otp, identifier, username, phone } = req.body;
    const user = await findUserByIdentifier({ identifier, username, phone });
    if (!user || !user.otp || !user.otp.code) return res.status(400).json({ message: "OTP non demandé ou utilisateur inconnu" });
    if (user.otp.code !== otp || (user.otp.expiresAt && user.otp.expiresAt < new Date())) {
      return res.status(400).json({ message: "OTP invalide ou expiré" });
    }
    user.password = password;
    user.otp = undefined;
    await user.save();
    res.json({ message: "Mot de passe mis à jour avec succès" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};
const User = require('../models/User');
const authService = require('../services/authService');

exports.register = async (req, res) => {
    console.log('Register body:', req.body);
    try {
        const { name, email, password, phone, nickname } = req.body;
        // Vérifier unicité email, username, phone
        if (email) {
            const existingEmail = await User.findOne({ email });
            if (existingEmail) {
                return res.status(409).json({
                    message: "Votre adresse email est déjà utilisée. Veuillez réessayer avec une autre adresse, vous connecter ou récupérer votre mot de passe."
                });
            }
        }
        if (req.body.username) {
            const existingUsername = await User.findOne({ username: req.body.username });
            if (existingUsername) {
                return res.status(409).json({
                    message: "Ce nom d'utilisateur est déjà utilisé. Veuillez en choisir un autre ou vous connecter."
                });
            }
        }
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(409).json({
                message: "Ce numéro de téléphone est déjà utilisé. Veuillez en saisir un autre ou vous connecter."
            });
        }
        const user = new User({ name, email, password, phone, nickname, username: req.body.username });
        await user.save();
        await authService.generateOTP(user); // Envoi OTP
        res.status(201).json({ message: 'Inscription réussie. Vérifiez votre téléphone pour l’OTP.' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        console.log('[BACKEND][Login] Payload reçu:', req.body);
        const { identifier, username, phone, password } = req.body;
        let user;
        if (identifier) {
            console.log('[BACKEND][Login] Recherche par identifier:', identifier);
            user = await User.findOne({
                $or: [
                    { email: identifier },
                    { phone: identifier },
                    { username: identifier },
                ],
            }).select('+password');
        } else if (username) {
            console.log('[BACKEND][Login] Recherche par username:', username);
            user = await User.findOne({ username }).select('+password');
        } else if (phone) {
            console.log('[BACKEND][Login] Recherche par phone:', phone);
            user = await User.findOne({ phone }).select('+password');
        }
        if (!user) {
            console.log('[BACKEND][Login] Utilisateur non trouvé');
            return res.status(401).json({ message: 'Identifiant ou mot de passe invalide' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            console.log('[BACKEND][Login] Mot de passe incorrect');
            return res.status(401).json({ message: 'Identifiant ou mot de passe invalide' });
        }
        if (user.otp && user.otp.code) {
            console.log('[BACKEND][Login] OTP requis pour cet utilisateur');
            return res.status(403).json({ message: 'Vérification OTP requise' });
        }
        const token = authService.generateToken(user);
        res.cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours
        });
        console.log('[BACKEND][Login] Connexion réussie pour user:', user._id);
        res.json({ user: { id: user._id, name: user.name, email: user.email, username: user.username, role: user.role } });
    } catch (err) {
        console.log('[BACKEND][Login] Erreur serveur:', err);
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