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
      {/* Header - Design System Uber Base */}
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <ModernCollectamLogo size={42} />
            <span className="text-2xl font-bold text-green-600 tracking-tight">Collectam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/features" className="text-gray-600 hover:text-green-600 transition-all duration-200 font-medium text-base">Fonctionnalités</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-green-600 transition-all duration-200 font-medium text-base">Comment ça marche</Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-all duration-200 font-medium text-base">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200 h-10 px-6 text-sm font-medium">Se connecter</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-green-600 hover:bg-green-700 fluorescent-glow transition-all duration-300 transform hover:scale-105 h-10 px-6 text-sm font-medium">S'inscrire</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Design System Uber Base */}
      <section className="relative min-h-screen pt-24 pb-12 overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10 min-h-screen flex flex-col justify-center">
          <div className="text-center max-w-5xl mx-auto space-y-16">
            <div className="space-y-10">
              <div className="mb-10">
                <p className="text-2xl md:text-3xl font-bold text-green-300 drop-shadow-2xl bg-black/20 px-8 py-4 rounded-2xl backdrop-blur-sm border border-green-400/30 tracking-tight">
                  La révolution verte commence ici
                </p>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in">
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

              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl border border-white/20">
                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed tracking-wide">
                  Collectam est une plateforme innovante qui vous aide à collecter vos déchets et
                  rendre votre ville plus propre avec une technologie avancée.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link to="/signup">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-12 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl fluorescent-glow transition-all duration-300 transform hover:scale-110 h-14">
                  Je m'inscris
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-12 py-5 rounded-2xl border-2 border-white bg-white/90 hover:bg-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 h-14">
                Télécharger l'app
              </Button>
              <Link to="/features">
                <Button size="lg" variant="ghost" className="text-lg px-12 py-5 rounded-2xl text-white bg-white/20 hover:bg-white/30 font-semibold backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 h-14">
                  Découvrir les fonctionnalités
                </Button>
              </Link>
            </div>

            {/* Dashboard Preview - Design System Uber Base */}
            <div className="mt-24">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/30 p-8 shadow-2xl max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-6 overflow-x-auto">
                    <div className="flex items-center space-x-3 px-5 py-3 bg-green-100 rounded-xl min-w-max">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-800">Accueil</span>
                      <div className="text-xs bg-green-200 px-3 py-1 rounded-lg font-medium">5 alertes</div>
                    </div>
                    <div className="flex items-center space-x-3 px-5 py-3 hover:bg-blue-100 rounded-xl transition-all min-w-max">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Zones</span>
                      <div className="text-xs bg-blue-200 px-3 py-1 rounded-lg font-medium">Yaoundé • Douala • Bamenda</div>
                    </div>
                    <div className="flex items-center space-x-3 px-5 py-3 hover:bg-purple-100 rounded-xl transition-all min-w-max">
                      <Target className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800">Missions</span>
                      <div className="text-xs bg-purple-200 px-3 py-1 rounded-lg font-medium">15 collectes aujourd'hui</div>
                    </div>
                    <div className="flex items-center space-x-3 px-5 py-3 hover:bg-orange-100 rounded-xl transition-all min-w-max">
                      <BarChart3 className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800">Analyses</span>
                      <div className="text-xs bg-orange-200 px-3 py-1 rounded-lg font-medium">Efficacité optimisée</div>
                    </div>
                    <div className="flex items-center space-x-3 px-5 py-3 hover:bg-red-100 rounded-xl transition-all min-w-max">
                      <Bell className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-red-800">Alertes</span>
                      <div className="text-xs bg-red-200 px-3 py-1 rounded-lg font-medium">Zone Nsam - Action requise</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/30695c4d7c484780b4746a7bd9db3707/image_fx-3-a50d47?format=webp&width=1200"
                    alt="Interface intelligente de collecte des déchets - Collecteurs en mission sur route camerounaise"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-5 left-5 bg-green-600/90 backdrop-blur-sm rounded-xl p-4 text-white">
                    <div className="flex items-center space-x-3">
                      <Activity className="w-4 h-4 animate-pulse" />
                      <span className="text-sm font-medium">Mission en cours - Zone Yaoundé Centre</span>
                    </div>
                  </div>
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3 text-green-600">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-semibold">Système Actif</span>
                    </div>
                  </div>
                  <div className="absolute top-5 left-5 bg-blue-600/90 backdrop-blur-sm rounded-xl p-3 text-white">
                    <div className="flex items-center space-x-2">
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

      {/* Pourquoi Collectam - Design System Uber Base */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center px-5 py-3 bg-green-100 rounded-full text-green-700 font-medium mb-8">
              <Zap className="w-4 h-4 mr-3" />
              Innovation verte
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Pourquoi <span className="text-green-600">Collectam</span> ?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed tracking-wide max-w-3xl mx-auto">
              Les dépôts sauvages polluent nos villes et nuisent à notre cadre de vie.
              Il est temps d'adopter une gestion connectée et intelligente des déchets urbains avec une technologie moderne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Optimisation des trajets</h3>
              <p className="text-gray-600 text-base leading-relaxed">Itinéraires intelligents pour une collecte efficace</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Réduction des dépôts sauvages</h3>
              <p className="text-gray-600 text-base leading-relaxed">Signalement instantané et intervention rapide</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Suivi en temps réel</h3>
              <p className="text-gray-600 text-base leading-relaxed">Visibilité complète sur toutes les opérations</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Notifications intelligentes</h3>
              <p className="text-gray-600 text-base leading-relaxed">Alertes automatiques multicanaux et prédictives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Clés - Design System Uber Base */}
      <section id="fonctionnalites" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Fonctionnalités <span className="text-blue-600">Intelligentes</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">Une suite complète d'outils intelligents pour révolutionner la collecte des déchets</p>
          </div>

          <div className="space-y-24">
            {/* Feature 1: Carte Interactive */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Carte interactive et heatmap intelligente</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed tracking-wide">
                  Visualisez en temps réel tous les points de collecte, dépôts sauvages et zones d'intervention
                  grâce à notre interface cartographique avancée avec technologie de pointe.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-green-600 mr-4" />Prédiction des zones à risque</li>
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-green-600 mr-4" />Heatmap en temps réel</li>
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-green-600 mr-4" />Géolocalisation précise</li>
                </ul>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-green-700 text-base">Zone Yaoundé</h4>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-gray-600">23 collectes aujourd'hui</p>
                      <p className="text-sm text-gray-600">12 points actifs</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-blue-700 text-base">Zone Douala</h4>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-gray-600">18 collectes aujourd'hui</p>
                      <p className="text-sm text-gray-600">8 points actifs</p>
                    </div>
                  </div>
                  <div className="bg-green-600 rounded-xl p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-base">🇨🇲 Cameroun</h4>
                        <p className="text-sm opacity-90">Villes connectées • Collectes optimisées</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">100%</p>
                        <p className="text-xs opacity-90">Engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Attribution Automatique */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Truck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Attribution automatique des missions</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed tracking-wide">
                  Notre algorithme intelligent assigne automatiquement les missions aux collecteurs
                  les plus proches et disponibles selon des critères optimisés.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-blue-600 mr-4" />Algorithme intelligent</li>
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-blue-600 mr-4" />Optimisation des trajets</li>
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-blue-600 mr-4" />Attribution intelligente</li>
                </ul>
              </div>

              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 text-base">Missions Actives - Yaoundé</span>
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">5 en cours</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                        <Truck className="w-6 h-6 text-green-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-base">Équipe Alpha - Quartier Nsam</p>
                          <p className="text-sm text-gray-600">12 points collectés • Arrivée: 15 min</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                        <Truck className="w-6 h-6 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-base">Équipe Beta - Zone Melen</p>
                          <p className="text-sm text-gray-600">8 points collectés • En route</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                        <Target className="w-6 h-6 text-purple-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-base">Mission Spéciale - Centre-ville</p>
                          <p className="text-sm text-gray-600">Zone prioritaire • Départ dans 30 min</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-base">Performance du jour</span>
                        <span className="font-bold text-lg">127 collectes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Signalement Mobile */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Signalement géolocalisé intelligent</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed tracking-wide">
                  Les citoyens peuvent signaler facilement les dépôts sauvages avec géolocalisation
                  automatique et reconnaissance d'image pour identifier le type de déchet.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-purple-600 mr-4" />Reconnaissance d'image automatique</li>
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-purple-600 mr-4" />Géolocalisation précise</li>
                  <li className="flex items-center text-gray-700 text-base"><CheckCircle className="w-5 h-5 text-purple-600 mr-4" />Photos et vidéos HD</li>
                </ul>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-5 max-w-sm mx-auto shadow-lg">
                    <div className="space-y-5">
                      <div className="bg-purple-600 text-white p-4 rounded-t-xl">
                        <h4 className="font-semibold text-base">Collectam Mobile</h4>
                      </div>
                      <div className="p-5 space-y-4">
                        <div className="bg-gray-100 rounded-xl h-32 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600">Localisation: Rue de la Reunification</p>
                        <p className="text-sm text-green-600 font-medium">Déchets plastiques détectés</p>
                        <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 h-10">
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

      {/* Carte Interactive Demo - Design System Uber Base */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Carte Interactive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
              Visualisez les points de collecte, dépôts sauvages et déplacements en temps réel à Yaoundé.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <img
              src="/client/components/ui/images/Screenshot 2025-08-11 143212.png"
              alt="Carte interactive de Yaoundé avec zones de collecte"
              className="w-full h-auto"
            />
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl p-5">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Zone propre</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">Dépôt sauvage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Collecte en cours</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 right-5 bg-green-600/90 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="flex items-center space-x-3">
                <Activity className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">Mise à jour en temps réel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qui peut utiliser Collectam - Design System Uber Base */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Qui peut utiliser <span className="text-indigo-600">Collectam</span> ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">Une solution adaptée à tous les acteurs de la collecte intelligente</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Particuliers et ménages</h3>
              <p className="text-gray-600 text-base leading-relaxed">Signalez facilement les dépôts sauvages et planifiez vos collectes intelligemment</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Collecteurs indépendants</h3>
              <p className="text-gray-600 text-base leading-relaxed">Optimisez vos tournées et augmentez votre efficacité grâce à notre technologie</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Entreprises de collecte</h3>
              <p className="text-gray-600 text-base leading-relaxed">Gérez vos flottes et équipes avec des outils intelligents professionnels</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Municipalités et collectivités</h3>
              <p className="text-gray-600 text-base leading-relaxed">Supervisez et coordonnez la propreté urbaine avec notre technologie avancée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne - Design System Uber Base */}
      <section id="comment" className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Comment ça <span className="text-cyan-600">fonctionne</span> ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">4 étapes simples pour une collecte optimisée</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                </div>
                <Smartphone className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Créer un compte</h3>
              <p className="text-gray-600 text-base leading-relaxed">Inscription rapide et sécurisée en quelques clics avec vérification automatique</p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                </div>
                <MapPin className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Signaler ou planifier</h3>
              <p className="text-gray-600 text-base leading-relaxed">Signalez un dépôt sauvage ou planifiez une collecte avec géolocalisation précise</p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                </div>
                <QrCode className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Collecte et validation</h3>
              <p className="text-gray-600 text-base leading-relaxed">Validation sur site avec QR Code et reconnaissance d'image automatique</p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl fluorescent-glow">
                </div>
                <BarChart3 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Suivi et analytics</h3>
              <p className="text-gray-600 text-base leading-relaxed">Suivi en temps réel et analyses prédictives</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Design System Uber Base */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Prêt à transformer la collecte des déchets ?
            </h2>
            <p className="text-xl text-green-100 leading-relaxed tracking-wide max-w-3xl mx-auto">
              Rejoignez des centaines d'utilisateurs au Cameroun qui font déjà confiance à Collectam
              pour optimiser leur gestion des déchets urbains avec notre technologie avancée.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-lg px-12 py-5 font-semibold fluorescent-glow transition-all duration-300 transform hover:scale-110 h-14">
                  Je m'inscris maintenant
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-12 py-5 border-white text-white hover:bg-white hover:text-green-600 font-semibold transition-all duration-300 transform hover:scale-110 h-14">
                Télécharger l'application
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="text-lg px-12 py-5 text-white hover:bg-white/10 font-semibold transition-all duration-300 transform hover:scale-110 h-14">
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Design System Uber Base */}
      <footer id="contact" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <ModernCollectamLogo size={40} />
                <span className="text-2xl font-bold tracking-tight">Collectam</span>
              </div>
              <p className="text-gray-400 leading-relaxed tracking-wide text-base">
                La plateforme intelligente qui révolutionne la collecte des déchets urbains au Cameroun avec notre technologie avancée.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-green-400 transition-colors" />
                <Twitter className="w-6 h-6 hover:text-green-400 transition-colors" />
                <Instagram className="w-6 h-6 hover:text-green-400 transition-colors" />
                <Linkedin className="w-6 h-6 hover:text-green-400 transition-colors" />
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg font-semibold tracking-tight">Fonctionnalités</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors text-base">Carte interactive</Link></li>
                <li><Link to="/features" className="hover:text-white transition-colors text-base">Missions automatiques</Link></li>
                <li><Link to="/features" className="hover:text-white transition-colors text-base">Signalement géolocalisé</Link></li>
                <li><Link to="/features" className="hover:text-white transition-colors text-base">Validation QR Code</Link></li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg font-semibold tracking-tight">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-base">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base">Formation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base">API</a></li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg font-semibold tracking-tight">Contact</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span className="text-base">contact@collectam.cm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-base">+237 6XX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-base">Yaoundé, Cameroun</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base">© 2024 Collectam. Tous droits réservés.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">CGU</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
