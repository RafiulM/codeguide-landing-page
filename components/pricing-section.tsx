"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/plans";

export function PricingSection() {
  return (
    <section className="my-12 sm:my-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Choose your plan</h2>
        <p className="text-muted-foreground mt-2">Simple pricing for developers and teams</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card key={plan.id} className={plan.popular ? "border-primary" : undefined}>
            <CardHeader>
              {plan.badge && (
                <div className="text-xs inline-flex items-center rounded-full bg-primary/10 text-primary px-2 py-1 mb-2">
                  {plan.badge}
                </div>
              )}
              <CardTitle className="flex items-baseline justify-between">
                <span>{plan.name}</span>
                <span className="text-xl">
                  <span className="text-3xl font-bold">${plan.priceMonthly}</span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </span>
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/sign-up?plan=${plan.id}`}>Sign up</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
