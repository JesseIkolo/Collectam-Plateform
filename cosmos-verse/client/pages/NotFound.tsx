import { Button } from "@/components/ui/button";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";

export default function NotFound() {
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
            <Link to="/how-it-works" className="font-medium text-base">Comment ça marche</Link>
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

      {/* 404 Content - Design System Uber Base */}
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Icon and Title */}
          <div className="mb-16">
            <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-8 shadow-xl">
              <AlertTriangle className="w-16 h-16" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Page introuvable</h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed tracking-wide">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              Utilisez les liens ci-dessous pour naviguer sur notre site.
            </p>
          </div>

          {/* Action Buttons - Design System Uber Base */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/">
              <Button size="lg" className="px-8 py-5 text-lg font-semibold transition-all duration-300 transform hover:scale-110 h-14 border border-gray-300 bg-white">
                <Home className="w-5 h-5 mr-3" />
                Retour à l'accueil
              </Button>
            </Link>
            <Button size="lg" variant="outline" onClick={() => window.history.back()} className="px-8 py-5 text-lg border-2 font-semibold transition-all duration-300 transform hover:scale-110 h-14">
              <ArrowLeft className="w-5 h-5 mr-3" />
              Page précédente
            </Button>
          </div>

          {/* Quick Links - Design System Uber Base */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Pages populaires</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/features" className="group p-6 bg-gray-50 rounded-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base mb-2">Fonctionnalités</h4>
                <p className="text-gray-600 text-sm leading-relaxed tracking-wide">Découvrez nos outils intelligents</p>
              </Link>

              <Link to="/how-it-works" className="group p-6 bg-gray-50 rounded-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base mb-2">Comment ça marche</h4>
                <p className="text-gray-600 text-sm leading-relaxed tracking-wide">Apprenez à utiliser Collectam</p>
              </Link>

              <Link to="/contact" className="group p-6 bg-gray-50 rounded-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base mb-2">Contact</h4>
                <p className="text-gray-600 text-sm leading-relaxed tracking-wide">Contactez notre équipe</p>
              </Link>
            </div>
          </div>

          {/* Help Section - Design System Uber Base */}
          <div className="mt-16 bg-white rounded-3xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Besoin d'aide ?</h3>
            <p className="text-base mb-8 max-w-2xl mx-auto tracking-wide">
              Si vous ne trouvez pas ce que vous cherchez, notre équipe est là pour vous aider.
              N'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-110 h-12 border border-gray-300 bg-white">Nous contacter</Button>
              </Link>
              <Link to="/help">
                <Button variant="outline" className="px-8 py-4 border-2 font-semibold transition-all duration-300 transform hover:scale-110 h-12">Centre d'aide</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
