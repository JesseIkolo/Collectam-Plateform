import { Button } from "@/components/ui/button";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import {
  Smartphone,
  MapPin,
  QrCode,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Truck,
  Bell,
  Clock,
  Shield,
  Zap,
  Target,
  Camera,
  Activity,
  Star,
  Play,
  Download,
  Mail,
  Phone
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <ModernCollectamLogo size={42} />
            <span className="text-2xl font-bold text-green-600">Collectam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-green-600 transition-all duration-200 font-medium">Fonctionnalités</Link>
            <Link to="/how-it-works" className="text-green-600 font-semibold">Comment ça marche</Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-all duration-200 font-medium">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200">Se connecter</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-green-600 hover:bg-green-700 fluorescent-glow transition-all duration-300 transform hover:scale-105">S'inscrire</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Processus simplifié
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Comment ça <span className="text-green-600">marche</span> ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez en 4 étapes simples comment Collectam révolutionne la gestion des déchets urbains
              avec une technologie moderne et accessible à tous.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Créer votre compte</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Inscription rapide et sécurisée en moins de 2 minutes. Choisissez votre profil
                  (particulier, collecteur, entreprise ou municipalité) et accédez immédiatement
                  à toutes les fonctionnalités.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Vérification automatique de l'identité
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Configuration personnalisée selon votre profil
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Accès immédiat à l'application mobile
                  </li>
                </ul>
                <div className="flex items-center space-x-4">
                  <Link to="/signup">
                    <Button className="bg-green-600 hover:bg-green-700 fluorescent-glow">
                      Créer mon compte
                    </Button>
                  </Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>2 minutes</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="font-bold text-gray-900">Collectam Mobile</h3>
                        <p className="text-sm text-gray-600">Application disponible</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-green-800">Profil Particulier</span>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-800">Profil Collecteur</span>
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-purple-800">Profil Entreprise</span>
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Signaler ou planifier</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Utilisez l'application mobile pour signaler un dépôt sauvage avec géolocalisation
                  automatique, ou planifiez une collecte programmée selon vos besoins.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    Géolocalisation automatique précise
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    Photos et vidéos HD intégrées
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    Reconnaissance automatique du type de déchet
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">
                      Signalement traité en moins de 30 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-4 max-w-sm mx-auto shadow-lg">
                    <div className="space-y-4">
                      <div className="bg-blue-600 text-white p-3 rounded-t-xl">
                        <h4 className="font-bold">Nouveau signalement</h4>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">📍 Localisation: Rue de la Reunification</p>
                          <p className="text-sm text-green-600 font-medium">♻️ Déchets plastiques détectés</p>
                          <p className="text-sm text-blue-600 font-medium">⏰ Signalé il y a 5 min</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                            Signaler
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            Planifier
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Collecte et validation</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Les collecteurs reçoivent automatiquement les missions et procèdent à la collecte
                  avec validation sur site via QR Code et reconnaissance d'image.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                    Attribution automatique aux collecteurs les plus proches
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                    Validation QR Code pour confirmer la collecte
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                    Suivi en temps réel de l'avancement
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">15 min</div>
                    <div className="text-sm text-purple-800">Temps moyen de collecte</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">99%</div>
                    <div className="text-sm text-green-800">Taux de réussite</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">Mission en cours</span>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        En route
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Truck className="w-6 h-6 text-green-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Équipe Alpha - Zone Nsam</p>
                          <p className="text-sm text-gray-600">Arrivée estimée: 8 min</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <QrCode className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-medium text-purple-800">
                            QR Code généré pour validation
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Suivi et analytics</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Accédez à des analyses détaillées, des rapports de performance et des insights
                  pour optimiser vos opérations de collecte.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                    Tableaux de bord personnalisés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                    Rapports automatiques hebdomadaires
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                    Prédictions et recommandations intelligentes
                  </li>
                </ul>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">
                      Données mises à jour en temps réel
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">Performance du jour</h3>
                      <Activity className="w-5 h-5 text-green-600 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">127</div>
                        <div className="text-sm text-gray-600">Collectes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">15</div>
                        <div className="text-sm text-gray-600">Équipes actives</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Efficacité</span>
                        <span className="font-medium">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-[94%]"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-3 text-white text-center">
                      <div className="text-sm font-medium">Objectif atteint</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Pourquoi choisir <span className="text-green-600">Collectam</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution complète qui simplifie la gestion des déchets pour tous les acteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sécurisé et fiable</h3>
              <p className="text-gray-600">
                Données protégées, authentification sécurisée et sauvegarde automatique
                pour une tranquillité d'esprit totale.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Rapide et efficace</h3>
              <p className="text-gray-600">
                Interface intuitive, processus optimisé et temps de réponse réduit
                pour une expérience utilisateur exceptionnelle.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Collaboratif</h3>
              <p className="text-gray-600">
                Communication en temps réel, partage d'informations et coordination
                optimale entre tous les acteurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Voir <span className="text-green-600">Collectam</span> en action
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Découvrez comment notre plateforme transforme la gestion des déchets urbains
            </p>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-xl">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Démonstration interactive</h3>
                <p className="text-gray-600">
                  Explorez toutes les fonctionnalités de Collectam avec notre démo interactive
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 fluorescent-glow">
                    <Play className="w-5 h-5 mr-2" />
                    Lancer la démo
                  </Button>
                  <Button variant="outline">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger l'app
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-green-100 leading-relaxed">
              Rejoignez la révolution verte et transformez la gestion des déchets dans votre ville
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-lg px-12 py-4 font-bold fluorescent-glow">
                  Commencer maintenant
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-4 border-white text-white hover:bg-white hover:text-green-600 font-bold">
                  Parler à un expert
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-green-100">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>contact@collectam.cm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+237 6XX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
