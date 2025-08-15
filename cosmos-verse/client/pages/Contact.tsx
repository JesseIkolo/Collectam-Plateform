import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: ""
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqData = [
    { question: "Comment fonctionne Collectam ?", answer: "Collectam utilise une technologie avancée pour optimiser la collecte des déchets. Les citoyens signalent les dépôts sauvages via l'application mobile, et notre système attribue automatiquement les missions aux collecteurs les plus proches pour une intervention rapide et efficace." },
    { question: "Quels types d'organisations peuvent utiliser Collectam ?", answer: "Collectam s'adresse à tous les acteurs de la gestion des déchets : municipalités, entreprises de collecte, collecteurs indépendants, et même les particuliers qui souhaitent signaler des dépôts sauvages dans leur quartier." },
    { question: "Y a-t-il des frais d'abonnement ?", answer: "Nous proposons différents plans tarifaires adaptés à vos besoins. Contactez-nous pour une démonstration gratuite et un devis personnalisé selon votre organisation et vos objectifs." },
    { question: "L'application fonctionne-t-elle hors ligne ?", answer: "Oui, l'application mobile Collectam fonctionne en mode hors ligne. Les données sont synchronisées automatiquement dès que la connexion est rétablie, garantissant que vous ne perdez aucune information." },
    { question: "Comment assurez-vous la sécurité des données ?", answer: "Nous respectons les normes de sécurité les plus strictes. Toutes les données sont chiffrées et stockées de manière sécurisée. Nous nous conformons également au RGPD et aux réglementations locales sur la protection des données." },
  ];

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
            <Link to="/contact" className="font-semibold text-base">Contact</Link>
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
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-xl leading-relaxed tracking-wide max-w-3xl mx-auto">
            Notre équipe d'experts est là pour vous accompagner dans votre projet de transformation
            de la gestion des déchets. N'hésitez pas à nous contacter pour toute question.
          </p>
        </div>

        {/* Contact Grid - Design System Uber Base */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-5 tracking-tight">Envoyez-nous un message</h2>
              <p className="text-base tracking-wide">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-5" />
                <h3 className="text-xl font-bold mb-3">Message envoyé !</h3>
                <p className="text-base">
                  Merci pour votre message. Nous vous répondrons dans les 24 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">Nom complet *</Label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Votre nom" className="h-12 border-2 focus:border-gray-600 rounded-xl text-base" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="votre@email.com" className="h-12 border-2 focus:border-gray-600 rounded-xl text-base" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="organization" className="text-sm font-medium mb-2 block">Organisation</Label>
                  <Input id="organization" name="organization" type="text" value={formData.organization} onChange={handleInputChange} placeholder="Votre organisation (optionnel)" className="h-12 border-2 focus:border-gray-600 rounded-xl text-base" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-2 block">Sujet *</Label>
                  <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="Sujet de votre message" className="h-12 border-2 focus:border-gray-600 rounded-xl text-base" required />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Décrivez votre projet ou posez-nous vos questions..." rows={6} className="border-2 focus:border-gray-600 rounded-xl resize-none text-base" required />
                </div>

                <Button type="submit" className="w-full py-5 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl h-14 border border-gray-300 bg-white text-[#212121]">
                  <Send className="w-5 h-5 mr-3" />
                  Envoyer le message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information - Design System Uber Base */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Informations de contact</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">Email</h4>
                    <p className="text-base">contact@collectam.cm</p>
                    <p className="text-base">support@collectam.cm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">Téléphone</h4>
                    <p className="text-base">+237 6 XX XX XX XX</p>
                    <p className="text-base">+237 2 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">Adresse</h4>
                    <p className="text-base">123 Avenue de l'Indépendance</p>
                    <p className="text-base">Yaoundé, Cameroun</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">Horaires d'ouverture</h4>
                    <p className="text-base">Lundi - Vendredi : 8h00 - 18h00</p>
                    <p className="text-base">Samedi : 9h00 - 14h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Design System Uber Base */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-5 tracking-tight">Questions fréquentes</h2>
            <p className="text-xl tracking-wide">
              Trouvez rapidement des réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full px-8 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-base">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="leading-relaxed tracking-wide text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Design System Uber Base */}
        <div className="text-center mt-24">
          <div className="bg-white rounded-3xl p-12 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Prêt à transformer votre gestion des déchets ?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto tracking-wide">
              Rejoignez des centaines d'organisations qui font déjà confiance à Collectam
              pour optimiser leur propreté urbaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-5 font-semibold transition-all duration-300 transform hover:scale-110 h-14 border border-gray-300 bg-white">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-5 border-2 font-semibold transition-all duration-300 transform hover:scale-110 h-14">
                  Demander une démo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
