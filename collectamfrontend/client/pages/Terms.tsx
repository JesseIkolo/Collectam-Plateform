import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F30695c4d7c484780b4746a7bd9db3707%2F8650e755c43b43798b3d648b8ed167d7?format=webp&width=1200"
          alt="Scenic background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 via-white/40 to-emerald-600/15"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 backdrop-blur-sm">
        <Link to="/" className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/30">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Collectam
          </span>
        </Link>

        <Link to="/">
          <Button
            variant="ghost"
            className="text-green-800 hover:text-green-900 hover:bg-white/30 border border-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="backdrop-blur-lg bg-white/95 dark:bg-green-900/90 rounded-2xl p-12 border border-green-200/30 shadow-2xl shadow-green-500/20">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-100 mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-green-700 dark:text-green-200">
            <p>
              This is a placeholder page for Terms of Service. In a production
              application, this would contain the complete terms and conditions
              for using the service.
            </p>
            <p>
              The beautiful scenic design continues throughout all pages,
              maintaining a consistent and engaging user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
