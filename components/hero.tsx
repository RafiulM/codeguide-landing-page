"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Star, Zap, Shield, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthButtons } from "@/components/auth-buttons";
import { cn } from "@/lib/utils";

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-600 dark:via-gray-700 dark:to-gray-600" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10" />
      
      {/* Top Right Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <div className="flex items-center gap-2 sm:gap-3">
          <AuthButtons />
          <ThemeToggle />
        </div>
      </div>

      {/* Floating decorative elements - hidden from screen readers */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: "0s" }} aria-hidden="true">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 dark:from-blue-400/10 dark:to-blue-600/10 rounded-full blur-xl" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: "1s" }} aria-hidden="true">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400/20 to-purple-600/20 dark:from-purple-400/10 dark:to-purple-600/10 rounded-full blur-xl" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: "2s" }} aria-hidden="true">
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 dark:from-cyan-400/10 dark:to-cyan-600/10 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/30 rounded-full mb-6" role="status" aria-live="polite">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-0">
              New
            </Badge>
            <span className="text-sm font-medium text-muted-foreground">
              Modern full-stack starter with authentication and database
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400 bg-clip-text text-transparent">
              Build Something
            </span>
            <br />
            <span className="text-foreground">
              Amazing Today
            </span>
          </h1>

          {/* Sub-heading */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            A powerful full-stack TypeScript starter with Next.js 15, authentication, 
            database integration, and beautiful UI components. Ship your ideas faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 py-6 h-auto text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Get started for free - sign up for an account"
            >
              <Link href="/sign-up">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-6 h-auto text-lg border-2 hover:bg-accent transition-all duration-200"
              aria-label="Sign in to your existing account"
            >
              <Link href="/sign-in">
                Sign In
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16" role="contentinfo" aria-label="Product ratings and features">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm font-medium text-muted-foreground">
                4.9/5 from 200+ developers
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Enterprise-ready</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span>Lightning fast</span>
            </div>
          </div>

          {/* Hero Image/Demo Area */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden" role="region" aria-label="Code demonstration">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" aria-hidden="true" />
              
              {/* Code Preview */}
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-2" role="img" aria-label="Window controls">
                    <div className="w-3 h-3 rounded-full bg-red-500" aria-label="Close window" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" aria-label="Minimize window" />
                    <div className="w-3 h-3 rounded-full bg-green-500" aria-label="Maximize window" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs font-mono text-muted-foreground bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                      app/page.tsx
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 dark:text-purple-400">import</span>
                    <span className="text-blue-600 dark:text-blue-400">{'{'}</span>
                    <span className="text-blue-600 dark:text-blue-400">Button</span>
                    <span className="text-blue-600 dark:text-blue-400">{'}'}</span>
                    <span className="text-purple-600 dark:text-purple-400">from</span>
                    <span className="text-green-600 dark:text-green-400">&quot;@/components/ui/button&quot;</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 dark:text-purple-400">export</span>
                    <span className="text-purple-600 dark:text-purple-400">default</span>
                    <span className="text-blue-600 dark:text-blue-400">function</span>
                    <span className="text-orange-600 dark:text-orange-400">Home</span>
                    <span className="text-gray-600 dark:text-gray-400">() {'{'}</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-gray-600 dark:text-gray-400">return</span>
                    <span className="text-orange-600 dark:text-orange-400"> {'&lt;'}</span>
                    <span className="text-orange-600 dark:text-orange-400">Button</span>
                    <span className="text-blue-600 dark:text-blue-400">&gt;</span>
                    <span className="text-gray-800 dark:text-gray-200">Get Started</span>
                    <span className="text-orange-600 dark:text-orange-400"> {'&lt;'}</span>
                    <span className="text-orange-600 dark:text-orange-400">/Button</span>
                    <span className="text-blue-600 dark:text-blue-400">&gt;</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{'}'}</div>
                </div>

                {/* Demo Button */}
                <div className="mt-6 flex justify-center">
                  <Button 
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    variant="outline" 
                    size="sm"
                    className="gap-2"
                    aria-pressed={isVideoPlaying}
                    aria-label={`${isVideoPlaying ? "Pause" : "Watch"} interactive demo`}
                  >
                    <Play className="w-4 h-4" aria-hidden="true" />
                    {isVideoPlaying ? "Pause Demo" : "Watch Demo"}
                  </Button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-2xl blur-xl -z-10" aria-hidden="true" />
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12" role="list" aria-label="Key technologies and features">
            {[
              { icon: Code, label: "TypeScript" },
              { icon: Zap, label: "Next.js 15" },
              { icon: Shield, label: "Better Auth" },
              { icon: Star, label: "Drizzle ORM" }
            ].map((feature, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="gap-2 px-3 py-1.5 text-sm bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                role="listitem"
              >
                <feature.icon className="w-4 h-4" aria-hidden="true" />
                {feature.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80" aria-hidden="true" />
    </section>
  );
}