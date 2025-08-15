import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Building, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    password: "",
    confirmPassword: "",
    userType: "particulier"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentative d'inscription:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: "", lastName: "", email: "", organization: "", password: "", confirmPassword: "", userType: "particulier" });
    }, 5000);
  };

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

      {/* Sign Up Form - Design System Uber Base */}
      <div className="flex items-center justify-center min-h-screen pt-24 pb-12 px-6">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            {/* Logo and Title */}
            <div className="text-center mb-10">
              <div className="flex justify-center mb-6">
                <ModernCollectamLogo size={60} />
              </div>
              <h1 className="text-3xl font-bold mb-3 tracking-tight">Créer un compte</h1>
              <p className="text-base tracking-wide">Rejoignez la révolution verte avec Collectam</p>
            </div>

            {isSubmitted ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-5" />
                <h3 className="text-xl font-bold mb-3">Compte créé avec succès !</h3>
                <p className="text-base mb-6">Vérifiez votre email pour confirmer votre inscription.</p>
                <Link to="/login">
                  <Button className="h-11 px-6 font-medium bg-white border border-gray-300 text-[#212121]">Se connecter maintenant</Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Type d'utilisateur</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                      <input type="radio" name="userType" value="particulier" checked={formData.userType === "particulier"} onChange={handleInputChange} className="w-4 h-4 border-gray-300 focus:ring-gray-500" />
                      <User className="w-5 h-5" />
                      <span className="text-sm font-medium">Particulier</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                      <input type="radio" name="userType" value="professionnel" checked={formData.userType === "professionnel"} onChange={handleInputChange} className="w-4 h-4 border-gray-300 focus:ring-gray-500" />
                      <Building className="w-5 h-5" />
                      <span className="text-sm font-medium">Professionnel</span>
                    </label>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium mb-2 block">Prénom *</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleInputChange} placeholder="Votre prénom" className="h-12 pl-12 pr-4 border-2 focus:border-gray-600 rounded-xl text-base" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium mb-2 block">Nom *</Label>
                    <Input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleInputChange} placeholder="Votre nom" className="h-12 px-4 border-2 focus:border-gray-600 rounded-xl text-base" required />
                  </div>
                </div>

                {/* Organization Field (for professionals) */}
                {formData.userType === "professionnel" && (
                  <div>
                    <Label htmlFor="organization" className="text-sm font-medium mb-2 block">Nom de l'organisation</Label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input id="organization" name="organization" type="text" value={formData.organization} onChange={handleInputChange} placeholder="Nom de votre organisation" className="h-12 pl-12 pr-4 border-2 focus:border-gray-600 rounded-xl text-base" />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">Adresse email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="votre@email.com" className="h-12 pl-12 pr-4 border-2 focus:border-gray-600 rounded-xl text-base" required />
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password" className="text-sm font-medium mb-2 block">Mot de passe *</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input id="password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleInputChange} placeholder="••••••••" className="h-12 pl-12 pr-12 border-2 focus:border-gray-600 rounded-xl text-base" required />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword" className="text-sm font-medium mb-2 block">Confirmer *</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} onChange={handleInputChange} placeholder="••••••••" className="h-12 pl-12 pr-12 border-2 focus:border-gray-600 rounded-xl text-base" required />
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-gray-500 mt-1" required />
                  <label className="text-sm">
                    J'accepte les <Link to="/terms" className="font-medium">conditions d'utilisation</Link> et la <Link to="/privacy" className="font-medium">politique de confidentialité</Link>
                  </label>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full py-4 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl h-12 border border-gray-300 bg-white text-[#212121]">
                  Créer mon compte
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}

            {/* Login Link */}
            <div className="text-center mt-8">
              <p className="text-base">
                Déjà un compte ?{" "}
                <Link to="/login" className="font-semibold transition-colors">Connectez-vous</Link>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center mt-8">
            <div className="flex justify-center space-x-6 text-sm">
              <Link to="/privacy" className="transition-colors">Confidentialité</Link>
              <Link to="/terms" className="transition-colors">Conditions d'utilisation</Link>
              <Link to="/help" className="transition-colors">Aide</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
