import { Button } from "@/components/ui/button";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 cursor-leaf">
            <ModernCollectamLogo size={42} />
            <span className="text-2xl font-bold text-green-600">Collectam</span>
          </Link>
        </div>
      </header>
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Comment ça <span className="text-green-600">marche</span> ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez en 4 étapes simples comment Collectam révolutionne la gestion des déchets.
          </p>
        </div>
      </div>
    </div>
  );
}
