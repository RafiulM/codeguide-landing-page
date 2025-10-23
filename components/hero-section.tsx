"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeroAuthButtons } from "./auth-buttons";

interface HeroSectionProps {
  className?: string;
  title?: string;
  description?: string;
  showAuthButtons?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroSection({
  className,
  title = "Codeguide Starter Fullstack",
  description = "A modern full-stack TypeScript starter with authentication, database, and UI components",
  showAuthButtons = true,
  ctaText,
  ctaHref = "/sign-up"
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "text-center py-12 sm:py-16 relative px-4",
        className
      )}
      role="banner"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
        <Image
          src="/codeguide-logo.png"
          alt="CodeGuide Logo"
          width={50}
          height={50}
          className="rounded-xl sm:w-[60px] sm:h-[60px]"
          priority
        />
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-parkinsans"
        >
          {title}
        </h1>
      </div>
      <p
        id="hero-description"
        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-8"
      >
        {description}
      </p>

      {showAuthButtons && (
        <div role="group" aria-label="Authentication actions">
          {ctaText ? (
            // Custom CTA button when ctaText is provided
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-3"
              aria-describedby="cta-description"
            >
              <Link href={ctaHref}>
                <UserPlus className="mr-2 h-5 w-5" />
                {ctaText}
              </Link>
            </Button>
          ) : (
            // Default HeroAuthButtons when no custom CTA
            <HeroAuthButtons />
          )}
        </div>
      )}
    </section>
  );
}