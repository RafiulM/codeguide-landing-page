import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroAuthButtons } from "@/components/auth-buttons";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/10 to-indigo-100/10 opacity-60" aria-hidden="true" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 sm:mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Build amazing products with modern stack</span>
          </div>

          {/* Main headline */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 sm:mb-8">
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Build Something
            </span>
            <span className="block text-gray-900 dark:text-white">
              Amazing Today
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
            A modern full-stack TypeScript starter with authentication, database, and UI components.
            Ship your next project in minutes, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-8 py-6 h-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              aria-label="Get started for free - create your account"
            >
              <Link href="/sign-up" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-8 py-6 h-auto border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
              aria-label="Sign in to your existing account"
            >
              <Link href="/sign-in">
                Sign In
              </Link>
            </Button>
          </div>

          {/* Alternative Auth Buttons for existing users */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Already have an account? <HeroAuthButtons />
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Next.js 15</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Latest framework with App Router</div>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">TypeScript</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Full type safety throughout</div>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Tailwind CSS</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Modern utility-first styling</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" aria-hidden="true" />
    </section>
  );
}