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
    <div className="min-h-screen bg-white text-[#212121]">
      {/* Header - Design System Uber Base */}
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <ModernCollectamLogo size={42} />
            <span className="text-2xl font-bold tracking-tight">Collectam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/features" className="font-medium text-base">Fonctionnalités</Link>
            <Link to="/how-it-works" className="font-semibold text-base">Comment ça marche</Link>
            <Link to="/contact" className="font-medium text-base">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-gray-300 h-10 px-6 text-sm font-medium">Se connecter</Button>
            </Link>
            <Link to="/signup">
              <Button className="h-10 px-6 text-sm font-medium bg-white border border-gray-300 text-[#212121]">S'inscrire</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Design System Uber Base */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-full font-medium mb-8">
              <Zap className="w-4 h-4 mr-3" />
              Processus simplifié
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
              Comment ça marche ?
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed tracking-wide">
              Découvrez en 4 étapes simples comment Collectam révolutionne la gestion des déchets urbains
              avec une technologie moderne et accessible à tous.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps - Design System Uber Base */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-sm">
                    1
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Créer votre compte</h2>
                </div>
                <p className="text-lg leading-relaxed tracking-wide">
                  Inscription rapide et sécurisée en moins de 2 minutes. Choisissez votre profil
                  (particulier, collecteur, entreprise ou municipalité) et accédez immédiatement
                  à toutes les fonctionnalités.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Vérification automatique de l'identité
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Configuration personnalisée selon votre profil
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Accès immédiat à l'application mobile
                  </li>
                </ul>
                <div className="flex items-center space-x-5">
                  <Link to="/signup">
                    <Button className="bg-white border border-gray-300 text-[#212121] h-11 px-6 font-medium">
                      Créer mon compte
                    </Button>
                  </Link>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>2 minutes</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="bg-white rounded-2xl p-7 space-y-5">
                    <div className="flex items-center space-x-4">
                      <Smartphone className="w-8 h-8" />
                      <div>
                        <h3 className="font-semibold text-base">Collectam Mobile</h3>
                        <p className="text-sm">Application disponible</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Profil Particulier</span>
                          <CheckCircle className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Profil Collecteur</span>
                          <CheckCircle className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Profil Entreprise</span>
                          <CheckCircle className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="lg:order-2 space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-sm">
                    2
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Signaler ou planifier</h2>
                </div>
                <p className="text-lg leading-relaxed tracking-wide">
                  Utilisez l'application mobile pour signaler un dépôt sauvage avec géolocalisation
                  automatique, ou planifiez une collecte programmée selon vos besoins.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Géolocalisation automatique précise
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Photos et vidéos HD intégrées
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Reconnaissance automatique du type de déchet
                  </li>
                </ul>
                <div className="rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Signalement traité en moins de 30 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="bg-white rounded-2xl p-5 max-w-sm mx-auto shadow-lg">
                    <div className="space-y-5">
                      <div className="p-4 rounded-t-xl border-b">
                        <h4 className="font-semibold text-base">Nouveau signalement</h4>
                      </div>
                      <div className="p-5 space-y-4">
                        <div className="bg-gray-100 rounded-xl h-32 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>Localisation: Rue de la Reunification</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span className="font-medium">Déchets plastiques détectés</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">Signalé il y a 5 min</span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <Button size="sm" className="flex-1 h-10 bg-white border border-gray-300 text-[#212121]">
                            Signaler
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 h-10">
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
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-sm">
                    3
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Collecte et validation</h2>
                </div>
                <p className="text-lg leading-relaxed tracking-wide">
                  Les collecteurs reçoivent automatiquement les missions et procèdent à la collecte
                  avec validation sur site via QR Code et reconnaissance d'image.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Attribution automatique aux collecteurs les plus proches
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Validation QR Code pour confirmer la collecte
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Suivi en temps réel de l'avancement
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold">15 min</div>
                    <div className="text-sm">Temps moyen de collecte</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm">Taux de réussite</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="bg-white rounded-2xl p-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-base">Mission en cours</span>
                      <div className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                        En route
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border-l-4 border-gray-200">
                        <Truck className="w-6 h-6" />
                        <div className="flex-1">
                          <p className="font-medium text-base">Équipe Alpha - Zone Nsam</p>
                          <p className="text-sm">Arrivée estimée: 8 min</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-[#212121] h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center space-x-3">
                          <QrCode className="w-5 h-5" />
                          <span className="text-sm font-medium">
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-sm">
                    4
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Suivi et analytics</h2>
                </div>
                <p className="text-lg leading-relaxed tracking-wide">
                  Accédez à des analyses détaillées, des rapports de performance et des insights
                  pour optimiser vos opérations de collecte.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Tableaux de bord personnalisés
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Rapports automatiques hebdomadaires
                  </li>
                  <li className="flex items-center text-base">
                    <CheckCircle className="w-5 h-5 mr-4" />
                    Prédictions et recommandations intelligentes
                  </li>
                </ul>
                <div className="rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Données mises à jour en temps réel
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="bg-white rounded-2xl p-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base">Performance du jour</h3>
                      <Activity className="w-5 h-5" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="text-center">
                        <div className="text-2xl font-bold">127</div>
                        <div className="text-sm">Collectes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">15</div>
                        <div className="text-sm">Équipes actives</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Efficacité</span>
                        <span className="font-medium">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#212121] h-2 rounded-full w-[94%]"></div>
                      </div>
                    </div>
                    <div className="rounded-xl p-4 text-center border border-gray-200">
                      <div className="text-sm font-medium">Objectif atteint</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Design System Uber Base */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              Pourquoi choisir Collectam ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto tracking-wide">
              Une solution complète qui simplifie la gestion des déchets pour tous les acteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center space-y-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Sécurisé et fiable</h3>
              <p className="text-base leading-relaxed tracking-wide">
                Données protégées, authentification sécurisée et sauvegarde automatique
                pour une tranquillité d'esprit totale.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center space-y-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Rapide et efficace</h3>
              <p className="text-base leading-relaxed tracking-wide">
                Interface intuitive, processus optimisé et temps de réponse réduit
                pour une expérience utilisateur exceptionnelle.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center space-y-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Collaboratif</h3>
              <p className="text-base leading-relaxed tracking-wide">
                Communication en temps réel, partage d'informations et coordination
                optimale entre tous les acteurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - Design System Uber Base */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Aperçu de Collectam</h2>
              <p className="text-xl tracking-wide">Explorez les principaux modules de la plateforme</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">Carte et zones</h3>
                <p className="text-base leading-relaxed tracking-wide">Visualisation en temps réel des points de collecte et zones prioritaires.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">Signalements</h3>
                <p className="text-base leading-relaxed tracking-wide">Création rapide de signalements avec photos et géolocalisation.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">Missions</h3>
                <p className="text-base leading-relaxed tracking-wide">Attribution automatique et suivi des missions en temps réel.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
                  <QrCode className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">Validation</h3>
                <p className="text-base leading-relaxed tracking-wide">Validation sur site via QR Code et contrôle qualité.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">Tableaux de bord</h3>
                <p className="text-base leading-relaxed tracking-wide">Suivi des opérations, analyses et rapports exportables.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">Notifications</h3>
                <p className="text-base leading-relaxed tracking-wide">Alertes intelligentes pour prioriser et coordonner les actions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Design System Uber Base */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Prêt à commencer ?
            </h2>
            <p className="text-xl leading-relaxed tracking-wide">
              Rejoignez la révolution verte et transformez la gestion des déchets dans votre ville
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-12 py-5 font-semibold h-14 border border-gray-300 bg-white">
                  Commencer maintenant
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-5 border-2 h-14 font-semibold">
                  Demander une démo
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-base">contact@collectam.cm</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="text-base">+237 6XX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
