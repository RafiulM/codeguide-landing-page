"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlanById, plans, type Plan } from "@/lib/plans";

export function UserPlan() {
  const [plan, setPlan] = useState<Plan | undefined>();

  useEffect(() => {
    try {
      const id = localStorage.getItem("selectedPlanId");
      setPlan(getPlanById(id));
    } catch {}
  }, []);

  if (!plan) {
    return (
      <Card className="mx-4 lg:mx-6">
        <CardHeader>
          <CardTitle>Your Plan</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          No plan selected yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-4 lg:mx-6">
      <CardHeader>
        <CardTitle>Your Plan: {plan.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-2">${plan.priceMonthly}/mo</div>
        <ul className="text-sm list-disc pl-5 space-y-1">
          {plan.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
