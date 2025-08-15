import { Button } from "@/components/ui/button";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import {
  MapPin,
  Truck,
  Smartphone,
  QrCode,
  Navigation,
  BarChart3,
  Bell,
  Camera,
  ArrowRight,
  Zap,
  Shield,
  Wifi,
  Brain,
  Activity,
  Target
} from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-white text-[#212121]">
      {/* Header - Design System Uber Base */}
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <ModernCollectamLogo size={42} />
            <span className="text-2xl font-bold text-green-600 tracking-tight">Collectam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/features" className="text-green-600 font-semibold text-base">Fonctionnalités</Link>
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
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-full text-[#212121] font-medium mb-8">
            <Brain className="w-4 h-4 mr-3" />
            Outil Révolutionnaire
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
            Des outils <span>révolutionnaires</span>
            <br />pour une ville <span>plus propre</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed tracking-wide">
            Découvrez notre suite complète d'outils intelligents conçus pour révolutionner
            la gestion des déchets urbains au Cameroun et en Afrique.
          </p>
        </div>

        {/* Features Grid - Design System Uber Base */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-5 tracking-tight">Carte Interactive</h3>
            <p className="mb-6 leading-relaxed tracking-wide text-base">
              Notre carte intelligente utilise des algorithmes avancés pour prédire les zones à risque et optimiser
              automatiquement les itinéraires de collecte en temps réel au Cameroun.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center font-medium group-hover:translate-x-1 transition-transform text-sm">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-5 tracking-tight">Attribution Intelligente</h3>
            <p className="mb-6 leading-relaxed tracking-wide text-base">
              Algorithme d'apprentissage automatique qui assigne les missions selon la proximité,
              la disponibilité et l'historique de performance des collecteurs.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center font-medium group-hover:translate-x-1 transition-transform text-sm">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-5 tracking-tight">Signalement Mobile</h3>
            <p className="mb-6 leading-relaxed tracking-wide text-base">
              Application mobile avec reconnaissance d'image automatique pour identifier automatiquement
              le type de déchet et estimer le volume nécessaire pour la collecte.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center font-medium group-hover:translate-x-1 transition-transform text-sm">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-3xl p-8 group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <QrCode className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-5 tracking-tight">Validation Blockchain</h3>
            <p className="mb-6 leading-relaxed tracking-wide text-base">
              Système de validation sécurisé avec QR codes cryptés et enregistrement
              blockchain pour une traçabilité complète et inaltérable des collectes.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center font-medium group-hover:translate-x-1 transition-transform text-sm">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-3xl p-8 group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Navigation className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-5 tracking-tight">Navigation Prédictive</h3>
            <p className="mb-6 leading-relaxed tracking-wide text-base">
              Routes optimisées en temps réel avec prédiction du trafic, météo et priorités
              dynamiques pour maximiser l'efficacité énergétique et réduire les coûts.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center font-medium group-hover:translate-x-1 transition-transform text-sm">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-3xl p-8 group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-5 tracking-tight">Analytics Prédictives</h3>
            <p className="mb-6 leading-relaxed tracking-wide text-base">
              Tableaux de bord intelligents avec machine learning pour prédire les besoins
              futurs et optimiser automatiquement les ressources de collecte.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center font-medium group-hover:translate-x-1 transition-transform text-sm">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Design System Uber Base */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              Prêt à révolutionner votre gestion des déchets ?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto tracking-wide">
              Rejoignez plus de 500 villes qui utilisent déjà Collectam pour optimiser
              leur propreté urbaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button size="lg" className="px-12 py-5 text-lg font-semibold transition-all duration-300 transform hover:scale-110 h-14 border border-gray-300 bg-white">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-12 py-5 text-lg border-2 transition-all duration-300 transform hover:scale-110 h-14 font-semibold">
                  Planifier une démo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
