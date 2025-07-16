import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Users, Shield, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F30695c4d7c484780b4746a7bd9db3707%2F8650e755c43b43798b3d648b8ed167d7?format=webp&width=1200"
          alt="Scenic background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 via-transparent to-white/10"></div>
      </div>

      {/* Green Fluorescent Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-scenic-grass/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Fluorescent Green Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping delay-1000 shadow-lg shadow-green-400/50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-ping delay-2000 shadow-lg shadow-emerald-300/50"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 bg-lime-400 rounded-full animate-ping delay-3000 shadow-lg shadow-lime-400/50"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-green-300 rounded-full animate-ping delay-4000 shadow-lg shadow-green-300/50"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-5000 shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-lime-300 rounded-full animate-ping delay-6000 shadow-lg shadow-lime-300/50"></div>
      </div>
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 backdrop-blur-md bg-white/10">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/30">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Collectam
          </span>
        </div>

        <div className="flex items-center space-x-4">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/register">
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl shadow-green-500/40 transform transition hover:scale-105 border border-green-400/20"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-white/50 text-green-800 hover:bg-white/30 backdrop-blur-md bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          <div className="backdrop-blur-md bg-white/40 dark:bg-green-900/40 rounded-2xl p-8 border border-green-200/60 shadow-2xl shadow-green-500/20 transform transition hover:scale-105 hover:shadow-green-400/30">
            <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 w-fit mb-6 shadow-lg shadow-green-500/30">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-100 mb-4">
              Connect
            </h3>
            <p className="text-green-700 dark:text-green-200 leading-relaxed">
              Join a community of explorers and adventurers. Share experiences,
              discover new destinations, and build lasting connections.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/40 dark:bg-green-900/40 rounded-2xl p-8 border border-green-200/60 shadow-2xl shadow-emerald-500/20 transform transition hover:scale-105 hover:shadow-emerald-400/30">
            <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 w-fit mb-6 shadow-lg shadow-emerald-500/30">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-100 mb-4">
              Secure
            </h3>
            <p className="text-green-700 dark:text-green-200 leading-relaxed">
              Your privacy and security are our top priorities. Travel with
              confidence knowing your data is protected with industry-leading
              encryption.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/40 dark:bg-green-900/40 rounded-2xl p-8 border border-green-200/60 shadow-2xl shadow-lime-500/20 transform transition hover:scale-105 hover:shadow-lime-400/30">
            <div className="p-3 rounded-full bg-gradient-to-r from-lime-500 to-green-500 w-fit mb-6 shadow-lg shadow-lime-500/30">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-100 mb-4">
              Discover
            </h3>
            <p className="text-green-700 dark:text-green-200 leading-relaxed">
              Unlock hidden gems and personalized recommendations powered by
              advanced AI. Every journey becomes a unique adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-500/30 to-transparent"></div>
    </div>
  );
}
