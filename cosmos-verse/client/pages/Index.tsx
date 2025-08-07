import { Button } from "@/components/ui/button";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Truck, 
  Smartphone, 
  Package, 
  Navigation, 
  BarChart3, 
  CheckCircle, 
  Bell,
  Users,
  Building2,
  Building,
  UserCheck,
  QrCode,
  Camera,
  Clock,
  Star,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Activity,
  Shield,
  Zap,
  Target
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 cursor-leaf hover:opacity-90 transition-opacity">
            <ModernCollectamLogo size={42} />
            <span className="text-2xl font-bold text-green-600">Collectam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-green-600 transition-all duration-200 cursor-leaf font-medium">Fonctionnalités</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-green-600 transition-all duration-200 cursor-leaf font-medium">Comment ça marche</Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-all duration-200 cursor-leaf font-medium">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="cursor-leaf border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200">Se connecter</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-green-600 hover:bg-green-700 cursor-leaf fluorescent-glow transition-all duration-300 transform hover:scale-105">S'inscrire</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen pt-16 pb-0 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/assets/30695c4d7c484780b4746a7bd9db3707/image_fx-3-a50d47?format=webp&width=800')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-transparent to-green-600/40"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-screen flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="mb-8">
                <p className="text-3xl md:text-4xl font-black text-green-300 drop-shadow-2xl bg-black/20 px-6 py-3 rounded-2xl backdrop-blur-sm border border-green-400/30">
                  🌍 La révolution verte commence ici
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight animate-fade-in">
                <span className="block text-white drop-shadow-2xl">
                  Faites de Votre Ville
                </span>
                <span className="block text-green-400 drop-shadow-2xl">
                  Un Endroit Propre
                </span>
                <span className="block text-white drop-shadow-2xl">
                  Pour Vivre
                </span>
              </h1>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl border border-white/20">
                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                  Collectam est une plateforme innovante qui vous aide à collecter vos déchets et
                  rendre votre ville plus propre avec une technologie avancée.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 cursor-leaf text-lg px-12 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl fluorescent-glow transition-all duration-300 transform hover:scale-110">
                  🚀 Je m'inscris
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="cursor-leaf text-lg px-12 py-4 rounded-2xl border-2 border-white bg-white/90 hover:bg-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                📱 Télécharger l'app
              </Button>
              <Link to="/features">
                <Button size="lg" variant="ghost" className="cursor-leaf text-lg px-12 py-4 rounded-2xl text-white bg-white/20 hover:bg-white/30 font-bold backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                  ✨ Découvrir les fonctionnalités
                </Button>
              </Link>
            </div>

            {/* Dashboard Preview with Real Content */}
            <div className="mt-16">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/30 p-6 shadow-2xl max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-6 overflow-x-auto">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-xl min-w-max">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-800">Accueil</span>
                    <div className="text-xs bg-green-200 px-2 py-1 rounded">5 alertes</div>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 rounded-xl cursor-leaf transition-all min-w-max">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Zones</span>
                    <div className="text-xs bg-blue-200 px-2 py-1 rounded">Yaoundé • Douala • Bamenda</div>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 hover:bg-purple-100 rounded-xl cursor-leaf transition-all min-w-max">
                    <Target className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">Missions</span>
                    <div className="text-xs bg-purple-200 px-2 py-1 rounded">15 collectes aujourd'hui</div>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 hover:bg-orange-100 rounded-xl cursor-leaf transition-all min-w-max">
                    <BarChart3 className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">Analyses</span>
                    <div className="text-xs bg-orange-200 px-2 py-1 rounded">+40% efficacité ce mois</div>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 hover:bg-red-100 rounded-xl cursor-leaf transition-all min-w-max">
                    <Bell className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">Alertes</span>
                    <div className="text-xs bg-red-200 px-2 py-1 rounded">Zone Nsam - Action requise</div>
                  </div>
                </div>
                </div>
                
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/30695c4d7c484780b4746a7bd9db3707/image_fx-3-a50d47?format=webp&width=1200"
                    alt="Interface intelligente de collecte des déchets - Collecteurs en mission sur route camerounaise"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 bg-green-600/90 backdrop-blur-sm rounded-xl p-3 text-white">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 animate-pulse" />
                      <span className="text-sm font-medium">Mission en cours - Zone Yaoundé Centre</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center space-x-2 text-green-600">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-bold">Système Actif</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm rounded-xl p-2 text-white">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs font-medium">Cameroun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Collectam - Improved Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Innovation verte
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Pourquoi <span className="text-green-600">Collectam</span> ?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Les dépôts sauvages polluent nos villes et nuisent à notre cadre de vie.
              Il est temps d'adopter une gestion connectée et intelligente des déchets urbains avec une technologie moderne.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-4 hover:bg-white/90 transition-all cursor-leaf shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Optimisation des trajets</h3>
              <p className="text-gray-600">Itinéraires intelligents powered by IA pour une collecte efficace</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-4 hover:bg-white/90 transition-all cursor-leaf shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Réduction des dépôts sauvages</h3>
              <p className="text-gray-600">Signalement instantané et intervention rapide</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-4 hover:bg-white/90 transition-all cursor-leaf shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Suivi en temps réel</h3>
              <p className="text-gray-600">Visibilité complète sur toutes les opérations 24/7</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-4 hover:bg-white/90 transition-all cursor-leaf shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Notifications intelligentes</h3>
              <p className="text-gray-600">Alertes automatiques multicanaux et prédictives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Clés - Fixed Layout */}
      <section id="fonctionnalites" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Fonctionnalités <span className="text-blue-600">Intelligentes</span></h2>
            <p className="text-xl text-gray-600">Une suite complète d'outils IA pour révolutionner la collecte des déchets</p>
          </div>
          
          <div className="space-y-20">
            {/* Feature 1: Carte Interactive */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Carte interactive et heatmap intelligente</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Visualisez en temps réel tous les points de collecte, dépôts sauvages et zones d'intervention
                grâce à notre interface cartographique avancée avec technologie de pointe.
              </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-3" />Prédiction des zones à risque</li>
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-3" />Heatmap en temps réel</li>
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-3" />Géolocalisation précise</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-green-700">Zone Yaoundé</h4>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-gray-600">✅ 23 collectes aujourd'hui</p>
                      <p className="text-sm text-gray-600">📍 12 points actifs</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-blue-700">Zone Douala</h4>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-gray-600">✅ 18 collectes aujourd'hui</p>
                      <p className="text-sm text-gray-600">📍 8 points actifs</p>
                    </div>
                  </div>
                  <div className="bg-green-600 rounded-xl p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold">🇨🇲 Cameroun</h4>
                        <p className="text-sm opacity-90">3 villes connectées • 500+ collectes/mois</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">95%</p>
                        <p className="text-xs opacity-90">Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 2: Attribution Automatique */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Attribution automatique des missions</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Notre algorithme intelligent assigne automatiquement les missions aux collecteurs
                  les plus proches et disponibles selon des critères optimisés.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-blue-600 mr-3" />Algorithme intelligent</li>
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-blue-600 mr-3" />Optimisation des trajets</li>
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-blue-600 mr-3" />Attribution intelligente</li>
                </ul>
              </div>
              
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">Missions Actives - Yaoundé</span>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">🚛 5 en cours</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Truck className="w-6 h-6 text-green-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">🏆 Équipe Alpha - Quartier Nsam</p>
                          <p className="text-sm text-gray-600">📍 12 points collectés • ⏰ Arrivée: 15 min</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Truck className="w-6 h-6 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">⚡ Équipe Beta - Zone Melen</p>
                          <p className="text-sm text-gray-600">📍 8 points collectés • 🛣️ En route</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Target className="w-6 h-6 text-purple-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">🎯 Mission Spéciale - Centre-ville</p>
                          <p className="text-sm text-gray-600">🚨 Zone prioritaire • 🕐 Départ dans 30 min</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-3 text-white">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">🏅 Performance du jour</span>
                        <span className="font-bold">127 collectes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Signalement Mobile */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Signalement géolocalisé intelligent</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Les citoyens peuvent signaler facilement les dépôts sauvages avec géolocalisation
                automatique et reconnaissance d'image pour identifier le type de déchet.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-purple-600 mr-3" />Reconnaissance d'image automatique</li>
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-purple-600 mr-3" />Géolocalisation précise</li>
                  <li className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-purple-600 mr-3" />Photos et vidéos HD</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-4 max-w-sm mx-auto shadow-lg">
                    <div className="space-y-4">
                      <div className="bg-purple-600 text-white p-3 rounded-t-xl">
                        <h4 className="font-bold">Collectam Mobile</h4>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600">📍 Localisation: Rue de la R��unification</p>
                        <p className="text-sm text-green-600 font-medium">✅ IA: Déchets plastiques détectés</p>
                        <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                          Signaler
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte Interactive Demo - Fixed with Cameroon Location */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Carte Interactive</h2>
            <p className="text-xl text-gray-600">
              Visualisez les points de collecte, dépôts sauvages et déplacements en temps réel à Yaoundé.
            </p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=3.848,11.502&zoom=12&size=800x500&maptype=roadmap&markers=color:green%7Clabel:A%7C3.848,11.502&markers=color:red%7Clabel:B%7C3.855,11.515&markers=color:blue%7Clabel:C%7C3.840,11.495&key=AIzaSyBFhNFGWPLM-FJeHZKJ5QVbY7OxS6sR3Zs"
              alt="Carte interactive de Yaoundé avec zones de collecte"
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg width='800' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='500' fill='%23e0f2fe'/%3E%3Cpath d='M100,100 Q400,50 700,100 Q600,250 500,300 Q400,350 300,300 Q200,250 100,100' fill='%23b2dfdb' stroke='%234db6ac' stroke-width='2'/%3E%3Ccircle cx='300' cy='200' r='8' fill='%2322c55e'/%3E%3Ctext x='300' y='190' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EA%3C/text%3E%3Ccircle cx='500' cy='150' r='8' fill='%23ef4444'/%3E%3Ctext x='500' y='140' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EB%3C/text%3E%3Ccircle cx='400' cy='300' r='8' fill='%233b82f6'/%3E%3Ctext x='400' y='290' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EC%3C/text%3E%3Ctext x='400' y='50' font-family='Arial' font-size='28' fill='%23059669' text-anchor='middle'%3ECarte Interactive - Yaoundé%3C/text%3E%3Ctext x='400' y='450' font-family='Arial' font-size='16' fill='%23374151' text-anchor='middle'%3EZones de collecte en temps réel%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Zone propre</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">Dépôt sauvage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Collecte en cours</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-green-600/90 backdrop-blur-sm rounded-xl p-3 text-white">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">Mise à jour en temps réel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qui peut utiliser Collectam */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Qui peut utiliser <span className="text-indigo-600">Collectam</span> ?</h2>
            <p className="text-xl text-gray-600">Une solution adaptée à tous les acteurs de la collecte intelligente</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-leaf">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Particuliers et ménages</h3>
              <p className="text-gray-600">Signalez facilement les dépôts sauvages et planifiez vos collectes avec l'IA</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-leaf">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Collecteurs indépendants</h3>
              <p className="text-gray-600">Optimisez vos tournées et augmentez votre efficacité grâce à l'IA</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-leaf">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Entreprises de collecte</h3>
              <p className="text-gray-600">Gérez vos flottes et équipes avec des outils IA professionnels</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-leaf">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Municipalités et collectivités</h3>
              <p className="text-gray-600">Supervisez et coordonnez la propreté urbaine avec intelligence artificielle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section id="comment" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Comment ça <span className="text-cyan-600">fonctionne</span> ?</h2>
            <p className="text-xl text-gray-600">4 étapes simples pour une collecte optimisée par l'IA</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                  1
                </div>
                <Smartphone className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Créer un compte</h3>
              <p className="text-gray-600">Inscription rapide et sécurisée en quelques clics avec vérification IA</p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                  2
                </div>
                <MapPin className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Signaler ou planifier</h3>
              <p className="text-gray-600">Signalez un dépôt sauvage ou planifiez une collecte avec géolocalisation IA</p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                  3
                </div>
                <QrCode className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Collecte et validation</h3>
              <p className="text-gray-600">Validation sur site avec QR Code et reconnaissance d'image IA</p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                  4
                </div>
                <BarChart3 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Suivi et analytics IA</h3>
              <p className="text-gray-600">Suivi en temps réel et analyses prédictives powered by IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Ils nous font <span className="text-orange-600">confiance</span></h2>
            <p className="text-xl text-gray-600">Découvrez les retours de nos utilisateurs et partenaires au Cameroun</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "Collectam a révolutionné notre gestion des déchets à Yaoundé. Nos tournées sont maintenant 40% plus efficaces grâce à l'IA."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">MD</div>
                <div>
                  <p className="font-semibold text-gray-900">Marie Djomou</p>
                  <p className="text-sm text-gray-600">Responsable Environnement, CUY</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "Interface intuitive et support client excellent. Nos équipes ont adopté l'outil très rapidement."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">JN</div>
                <div>
                  <p className="font-semibold text-gray-900">Jean Nkomo</p>
                  <p className="text-sm text-gray-600">Directeur, EcoNet Cameroun</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "Grâce à Collectam, nous avons réduit de 60% les dépôts sauvages dans notre quartier de Douala."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">SA</div>
                <div>
                  <p className="font-semibold text-gray-900">Sophie Ateba</p>
                  <p className="text-sm text-gray-600">Présidente, Association Bassa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Prêt à transformer la collecte des déchets ?
            </h2>
            <p className="text-xl text-green-100 leading-relaxed">
              Rejoignez des centaines d'utilisateurs au Cameroun qui font déjà confiance à Collectam 
              pour optimiser leur gestion des déchets urbains avec l'intelligence artificielle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="cursor-leaf text-lg px-12 py-4 font-bold fluorescent-glow transition-all duration-300 transform hover:scale-110">
                  🚀 Je m'inscris maintenant
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="cursor-leaf text-lg px-12 py-4 border-white text-white hover:bg-white hover:text-green-600 font-bold transition-all duration-300 transform hover:scale-110">
                📱 Télécharger l'application
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="cursor-leaf text-lg px-12 py-4 text-white hover:bg-white/10 font-bold transition-all duration-300 transform hover:scale-110">
                  📞 Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ModernCollectamLogo size={40} />
                <span className="text-2xl font-bold">Collectam</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La plateforme intelligente qui révolutionne la collecte des déchets urbains au Cameroun avec l'IA.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 cursor-leaf hover:text-green-400 transition-colors" />
                <Twitter className="w-6 h-6 cursor-leaf hover:text-green-400 transition-colors" />
                <Instagram className="w-6 h-6 cursor-leaf hover:text-green-400 transition-colors" />
                <Linkedin className="w-6 h-6 cursor-leaf hover:text-green-400 transition-colors" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Fonctionnalités</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="cursor-leaf hover:text-white transition-colors">Carte interactive IA</Link></li>
                <li><Link to="/features" className="cursor-leaf hover:text-white transition-colors">Missions automatiques</Link></li>
                <li><Link to="/features" className="cursor-leaf hover:text-white transition-colors">Signalement géolocalisé</Link></li>
                <li><Link to="/features" className="cursor-leaf hover:text-white transition-colors">Validation QR Code</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="cursor-leaf hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="cursor-leaf hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="cursor-leaf hover:text-white transition-colors">Formation</a></li>
                <li><a href="#" className="cursor-leaf hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>contact@collectam.cm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+237 6XX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Yaoundé, Cameroun</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Collectam. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white cursor-leaf transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white cursor-leaf transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white cursor-leaf transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
