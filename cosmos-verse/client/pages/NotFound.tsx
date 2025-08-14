import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
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

      {/* 404 Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
              <div className="text-8xl font-black text-gray-300 mb-6">404</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page introuvable</h1>
              <p className="text-xl text-gray-600 mb-8">
                Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-green-600 hover:bg-green-700 cursor-leaf fluorescent-glow transition-all duration-300 transform hover:scale-105">
                    <Home className="w-5 h-5 mr-2" />
                    Retour à l'accueil
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="cursor-leaf border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Page précédente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
