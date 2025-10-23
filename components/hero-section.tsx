"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  /** Main headline text */
  headline: string;
  /** Sub-headline or description text */
  subHeadline: string;
  /** Call-to-action button label */
  ctaLabel?: string;
  /** Call-to-action button destination URL */
  ctaHref?: string;
  /** Logo image source */
  logoSrc?: string;
  /** Logo alt text */
  logoAlt?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show authentication buttons instead of CTA */
  showAuthButtons?: boolean;
  /** Custom hero actions component */
  customActions?: React.ReactNode;
}

export function HeroSection({
  headline,
  subHeadline,
  ctaLabel = "Get Started",
  ctaHref = "/sign-up",
  logoSrc = "/codeguide-logo.png",
  logoAlt = "CodeGuide Logo",
  className = "",
  showAuthButtons = false,
  customActions,
}: HeroSectionProps) {
  return (
    <section
      className={`text-center py-12 sm:py-16 relative px-4 ${className}`}
      aria-labelledby="hero-headline"
      role="banner"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
          <div className="flex-shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={50}
              height={50}
              className="rounded-xl sm:w-[60px] sm:h-[60px]"
              priority
              aria-hidden="true"
            />
          </div>
          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-parkinsans"
          >
            {headline}
          </h1>
        </div>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-8"
          role="doc-subtitle"
        >
          {subHeadline}
        </p>

        {customActions ? (
          <div
            className="flex justify-center"
            role="group"
            aria-label="Hero actions"
          >
            {customActions}
          </div>
        ) : showAuthButtons ? (
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            role="group"
            aria-label="Authentication actions"
          >
            <Button variant="outline" asChild>
              <Link href="/sign-in" aria-describedby="sign-in-description">
                Sign In
              </Link>
            </Button>
            <span id="sign-in-description" className="sr-only">
              Sign in to your existing account
            </span>
            <Button asChild>
              <Link href="/sign-up" aria-describedby="sign-up-description">
                Sign Up
              </Link>
            </Button>
            <span id="sign-up-description" className="sr-only">
              Create a new account
            </span>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button
              size="lg"
              asChild
              aria-describedby="cta-description"
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
            <span id="cta-description" className="sr-only">
              Get started with {ctaLabel.toLowerCase()}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;