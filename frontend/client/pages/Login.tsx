import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/assets/6b764782658d4e5ea318c4602200405f/image_fx-1-e2cc29?format=webp&width=800')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-collectam-900/90 via-collectam-800/85 to-collectam-700/80"></div>
      


      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          {/* Logo and title */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-collectam-400 to-collectam-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C14.5 4 13 4.5 11.5 6C10 7.5 8.5 10 8.5 13.5C8.5 17 10 20 11.5 21.5C13 23 14.5 23.5 16 23.5C17.5 23.5 19 23 20.5 21.5C22 20 23.5 17 23.5 13.5C23.5 10 22 7.5 20.5 6C19 4.5 17.5 4 16 4Z" fill="white"/>
                <path d="M16 4C16 8.5 16 13 16 17.5C16 19 16 20.5 16 22" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 9C13.5 10.5 14.7 12 16 13.5C17.3 12 18.5 10.5 20 9" stroke="#166534" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Se connecter</h1>
            <p className="text-collectam-100">Connectez-vous à votre compte Collectam</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-collectam-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse email"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-collectam-200 focus:outline-none focus:ring-2 focus:ring-collectam-400 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-collectam-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-collectam-200 focus:outline-none focus:ring-2 focus:ring-collectam-400 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-5 w-5 text-collectam-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-collectam-500 focus:ring-collectam-400 border-white/20 rounded bg-white/10"
                />
                <span className="ml-2 text-sm text-collectam-100">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm text-collectam-200 hover:text-white transition-colors">
                Mot de passe oublié ?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-collectam-500 hover:bg-collectam-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-collectam-400"
            >
              Se connecter
            </button>

            {/* Sign up link */}
            <p className="text-center text-collectam-100">
              Pas encore de compte ?{" "}
              <Link to="/register" className="text-collectam-300 hover:text-white font-semibold transition-colors">
                S'inscrire
              </Link>
            </p>

            {/* Divider */}
            <div className="flex justify-center my-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-collectam-100 rounded-full text-sm font-medium border border-white/20">
                Ou continuer avec
              </span>
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/15 border border-white/30 rounded-xl text-white hover:bg-white/25 transition-all duration-200 backdrop-blur-sm transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/15 border border-white/30 rounded-xl text-white hover:bg-white/25 transition-all duration-200 backdrop-blur-sm transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium">GitHub</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
