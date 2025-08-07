import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: "🗺️",
      title: "Carte interactive et heatmap",
      description: "Visualisez en temps réel les points de collecte et les zones problématiques"
    },
    {
      icon: "🚛",
      title: "Attribution automatique des missions",
      description: "Optimisation intelligente des tournées et attribution des collecteurs"
    },
    {
      icon: "📲",
      title: "Signalement géolocalisé",
      description: "Signalement avec photo/vidéo géolocalisée pour une précision maximale"
    },
    {
      icon: "📦",
      title: "Collecte sur abonnement",
      description: "Service de collecte programmée ou à la demande selon vos besoins"
    },
    {
      icon: "📡",
      title: "Itinéraires optimisés",
      description: "Calcul intelligent des trajets pour réduire temps et coûts"
    },
    {
      icon: "📊",
      title: "Tableau de bord statistiques",
      description: "Analyse complète des performances et indicateurs de propreté"
    },
    {
      icon: "✅",
      title: "Validation via QR Code",
      description: "Validation sécurisée des collectes avec traçabilité complète"
    },
    {
      icon: "📩",
      title: "Notifications multicanaux",
      description: "Alertes SMS, email et push pour un suivi en temps réel"
    }
  ];

  const userTypes = [
    {
      icon: "👥",
      title: "Particuliers et ménages",
      description: "Simplifiez vos démarches de collecte de déchets"
    },
    {
      icon: "🚛",
      title: "Collecteurs indépendants",
      description: "Optimisez vos tournées et trouvez de nouveaux clients"
    },
    {
      icon: "🏢",
      title: "Entreprises de collecte",
      description: "Digitalisez votre activité et améliorez votre efficacité"
    },
    {
      icon: "🏙️",
      title: "Municipalités et collectivités",
      description: "Gérez la propreté urbaine avec une solution moderne"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: "📲",
      title: "Créer un compte",
      description: "Inscrivez-vous en quelques clics sur notre plateforme"
    },
    {
      number: "2",
      icon: "📌",
      title: "Signaler ou planifier une collecte",
      description: "Géolocalisez votre demande et ajoutez photos/vidéos"
    },
    {
      number: "3",
      icon: "🚛",
      title: "Collecte et validation sur site",
      description: "Le collecteur intervient et valide via QR Code/photo"
    },
    {
      number: "4",
      icon: "📊",
      title: "Suivi en temps réel",
      description: "Consultez l'historique et le statut de vos collectes"
    }
  ];

  // Collectam Logo - Exact match from image
  const Leaf = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C7 2 3 6 3 11C3 16 7 20 12 22C17 20 21 16 21 11C21 6 17 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M12 4C12 8 12 12 12 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  // Beautiful benefit icons with SVGs
  const BenefitIcon = ({ type, className }: { type: string, className?: string }) => {
    const icons: { [key: string]: JSX.Element } = {
      "rocket": (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4.5 16.5c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 15l-1.5-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 7.5L4.5 3c7.5-1 12.5 4 12.5 4s5 5 4 12.5L16.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "shield": (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7V13C3 17.55 6.84 21.74 12 23C17.16 21.74 21 17.55 21 13V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      "phone": (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "bell": (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return icons[type] || <div className={className}></div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-collectam-50 to-collectam-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-3 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 shadow-xl shadow-green-500/30">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Collectam
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Link to="/login">
            <Button
              variant="ghost"
              className="text-green-800 hover:text-green-900 hover:bg-white/30 backdrop-blur-sm border border-white/20"
            >
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl shadow-green-500/30">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F6b764782658d4e5ea318c4602200405f%2F1f6218bbe7b54683a9de7ec4724eaf95?format=webp&width=800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-collectam-900/40 via-collectam-800/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
                Make Your City
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
                A Clean Place To Live
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-900 dark:text-green-100 max-w-3xl mx-auto leading-relaxed font-medium backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
              Collectam is a platform that helps you collect your waste and make your City Cleaner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/register">
                <button
                  className="bg-collectam-500 hover:bg-collectam-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)'
                  }}
                >
                  Je m'inscris
                </button>
              </Link>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
                Télécharger l'app
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border-2 border-green-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
                Découvrir les fonctionnalités
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Collectam Section - IMPROVED */}
      <section className="py-20 bg-gradient-to-br from-collectam-100 to-collectam-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-collectam-900 mb-6">
              Pourquoi Collectam ?
            </h2>
            <p className="text-lg text-collectam-700 max-w-3xl mx-auto">
              Les dépôts sauvages et la gestion inefficace des déchets urbains représentent un défi majeur pour nos villes. 
              Collectam apporte une solution connectée et intelligente pour une gestion optimisée de la propreté urbaine.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "rocket", title: "Optimisation des trajets", desc: "Réduction jusqu'à 40% des coûts de collecte" },
              { icon: "shield", title: "Réduction des dépôts sauvages", desc: "Signalement et intervention rapide" },
              { icon: "phone", title: "Suivi en temps réel", desc: "Visibilité complète sur toutes les opérations" },
              { icon: "bell", title: "Notifications automatisées", desc: "Alertes intelligentes multicanaux" }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-collectam-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-collectam-200 hover:border-collectam-300">
                <div className="w-16 h-16 bg-gradient-to-br from-collectam-500 to-collectam-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <BenefitIcon type={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-collectam-900 mb-2">{benefit.title}</h3>
                <p className="text-collectam-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="fonctionnalites" className="py-20 bg-gradient-to-br from-collectam-50 to-collectam-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-collectam-900 mb-6">
              Fonctionnalités Clés
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {features.map((feature, index) => (
              <div key={index} className={`flex items-start space-x-4 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <div className="flex-shrink-0 w-16 h-16 bg-collectam-200 rounded-2xl flex items-center justify-center text-2xl border border-collectam-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-collectam-900 mb-2">{feature.title}</h3>
                  <p className="text-collectam-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Demo */}
      <section className="py-20 bg-gradient-to-br from-collectam-100 to-collectam-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-collectam-900 mb-6">
              Carte Interactive en Temps Réel
            </h2>
            <p className="text-lg text-collectam-700 max-w-3xl mx-auto">
              Visualisez les points de collecte, dépôts sauvages et déplacements en temps réel grâce à notre heatmap interactive.
            </p>
          </div>
          <div className="bg-collectam-50 rounded-2xl shadow-2xl p-8 border border-collectam-200">
            <div className="aspect-video bg-gradient-to-br from-collectam-200 to-collectam-300 rounded-xl flex items-center justify-center border border-collectam-400">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-collectam-800 mb-2">Démo Interactive</h3>
                <p className="text-collectam-700">Carte avec heatmap des zones de collecte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Use Section */}
      <section className="py-20 bg-gradient-to-br from-collectam-50 to-collectam-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-collectam-900 mb-6">
              Qui peut utiliser Collectam ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userTypes.map((userType, index) => (
              <div key={index} className="bg-gradient-to-br from-collectam-100 to-collectam-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all transform hover:-translate-y-2 border border-collectam-300">
                <div className="text-4xl mb-4">{userType.icon}</div>
                <h3 className="text-xl font-bold text-collectam-900 mb-2">{userType.title}</h3>
                <p className="text-collectam-700">{userType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="comment-ca-marche" className="py-20 bg-gradient-to-br from-collectam-100 to-collectam-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-collectam-900 mb-6">
              Comment ça fonctionne ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-collectam-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg border-4 border-collectam-200">
                    {step.number}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-collectam-900 mb-2">{step.title}</h3>
                <p className="text-collectam-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-collectam-600 to-collectam-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Prêt à révolutionner la collecte des déchets ?
          </h2>
          <p className="text-lg text-collectam-100 mb-12 max-w-3xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui font confiance à Collectam pour optimiser la propreté urbaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/register"
              className="bg-white hover:bg-collectam-50 text-collectam-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Je m'inscris maintenant
            </Link>
            <button className="bg-collectam-700 hover:bg-collectam-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
              Télécharger l'application
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-collectam-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 shadow-xl shadow-green-500/30 mr-3">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Collectam</span>
              </div>
              <p className="text-collectam-200">
                La plateforme intelligente de collecte des déchets urbains.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-collectam-200">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-collectam-200">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-collectam-200">
                <li>📧 contact@collectam.fr</li>
                <li>📱 Réseaux sociaux</li>
                <li>📄 Mentions légales</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-collectam-700 mt-12 pt-8 text-center text-collectam-300">
            <p>&copy; 2024 Collectam. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
