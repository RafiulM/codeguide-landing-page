"use client";

import { HeroAuthButtons } from "@/components/auth-buttons";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthButtons } from "@/components/auth-buttons";
import Image from "next/image";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      aria-label="Hero section"
    >
      {/* Background decoration - decorative only, no accessibility concern */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation controls in top-right */}
      <nav className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10" aria-label="User navigation">
        <div className="flex items-center gap-2 sm:gap-3">
          <AuthButtons />
          <ThemeToggle />
        </div>
      </nav>

      {/* Main hero content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and title */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <Image
              src="/codeguide-logo.png"
              alt="CodeGuide Logo"
              width={60}
              height={60}
              className="rounded-xl w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
              priority
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-parkinsans leading-tight">
              Codeguide Starter Fullstack
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-3 sm:mb-4 font-medium px-2">
            Build modern web applications faster with our comprehensive full-stack TypeScript starter
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Everything you need: authentication, database integration, beautiful UI components, and modern tooling - all configured and ready to go
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 sm:mb-10">
            <HeroAuthButtons />
          </div>

          {/* Feature highlights */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground"
            role="list"
            aria-label="Key features"
          >
            <div className="flex items-center gap-2" role="listitem">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span>TypeScript Ready</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <ArrowRight className="w-4 h-4 text-green-600 dark:text-green-400" aria-hidden="true" />
              <span>Easy Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
