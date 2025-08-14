import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User, Phone, Eye, EyeOff, Building } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-500 to-emerald-600">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M12 0l12 12-12 12L0 12z\"/%3E%3Cpath d=\"M48 0l12 12-12 12-12-12z\"/%3E%3Cpath d=\"M12 36l12 12-12 12-12-12z\"/%3E%3Cpath d=\"M48 36l12 12-12 12-12-12z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 cursor-leaf hover:opacity-90 transition-opacity">
            <ArrowLeft className="w-6 h-6 text-white" />
            <ModernCollectamLogo size={40} />
            <span className="text-2xl font-bold text-white">Collectam</span>
          </Link>
        </div>
      </header>

      {/* Sign Up Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4 py-8">
        <div className="w-full max-w-lg">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 fluorescent-glow">
            <div className="text-center mb-8">
              <div className="mb-6">
                <ModernCollectamLogo size={64} className="mx-auto mb-4" />
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">Rejoignez Collectam</h1>
              <p className="text-lg font-medium text-gray-700">Créez votre compte et révolutionnez la collecte</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">Prénom</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="pl-10 cursor-leaf border-2 focus:border-blue-500 rounded-xl"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Nom</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="pl-10 cursor-leaf border-2 focus:border-blue-500 rounded-xl"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@exemple.com"
                    className="pl-10 cursor-leaf border-2 focus:border-blue-500 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="organization" className="text-sm font-medium text-gray-700">Organisation (optionnel)</Label>
                <div className="relative mt-1">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="organization"
                    type="text"
                    placeholder="Ville de Yaoundé"
                    className="pl-10 cursor-leaf border-2 focus:border-blue-500 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Téléphone</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+237 6 XX XX XX XX"
                    className="pl-10 cursor-leaf border-2 focus:border-blue-500 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Mot de passe</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-12 cursor-leaf border-2 focus:border-blue-500 rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-leaf"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirmer le mot de passe</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-12 cursor-leaf border-2 focus:border-blue-500 rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-leaf"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-leaf"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 cursor-leaf">
                  J'accepte les{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700">conditions d'utilisation</a>
                  {" "}et la{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700">politique de confidentialité</a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 cursor-leaf py-4 text-xl font-black text-white rounded-xl fluorescent-glow transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-blue-400"
              >
                <span className="drop-shadow-lg">CRÉER MON COMPTE</span>
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Déjà un compte ?{" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium cursor-leaf">
                    Se connecter
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
