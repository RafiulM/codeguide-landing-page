import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroAuthButtons } from "@/components/auth-buttons";
import { ThemeToggle } from "@/components/theme-toggle";

export function Hero() {
  return (
    <section className="text-center py-12 sm:py-16 relative px-4">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
        <Image
          src="/codeguide-logo.png"
          alt="CodeGuide Logo"
          width={50}
          height={50}
          className="rounded-xl sm:w-[60px] sm:h-[60px]"
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-parkinsans">
          Codeguide Starter Fullstack
        </h1>
      </div>

      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-8">
        A modern full-stack TypeScript starter with authentication, database, and UI components
      </p>

      <HeroAuthButtons />
    </section>
  );
}