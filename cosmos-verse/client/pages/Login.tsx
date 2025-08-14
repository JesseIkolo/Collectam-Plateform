import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModernCollectamLogo } from "@/components/ui/modern-collectam-logo";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"12\" cy=\"12\" r=\"3\"/%3E%3Ccircle cx=\"48\" cy=\"12\" r=\"3\"/%3E%3Ccircle cx=\"12\" cy=\"48\" r=\"3\"/%3E%3Ccircle cx=\"48\" cy=\"48\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
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

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="w-full max-w-md">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 fluorescent-glow">
            <div className="text-center mb-8">
              <div className="mb-6">
                <ModernCollectamLogo size={64} className="mx-auto mb-4" />
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">Bon retour !</h1>
              <p className="text-lg font-medium text-gray-700">Connectez-vous à votre compte Collectam</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="pl-10 cursor-leaf border-2 focus:border-green-500 rounded-xl"
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
                      className="pl-10 pr-12 cursor-leaf border-2 focus:border-green-500 rounded-xl"
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-leaf"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-leaf">
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="text-green-600 hover:text-green-700 cursor-leaf font-medium">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 cursor-leaf py-4 text-xl font-black text-white rounded-xl fluorescent-glow transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-400"
              >
                <span className="drop-shadow-lg">SE CONNECTER</span>
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Pas encore de compte ?{" "}
                  <Link to="/signup" className="text-green-600 hover:text-green-700 font-medium cursor-leaf">
                    S'inscrire gratuitement
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
