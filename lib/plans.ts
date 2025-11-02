export type Plan = {
  id: string;
  name: string;
  priceMonthly: number;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 0,
    description: "Perfect to explore Codeguide with core features.",
    features: [
      "Basic components",
      "Email sign-in",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 12,
    description: "For individuals building serious projects.",
    features: [
      "All Starter features",
      "Advanced UI components",
      "Priority support",
    ],
    popular: true,
    badge: "Most popular",
  },
  {
    id: "team",
    name: "Team",
    priceMonthly: 29,
    description: "Best for small teams that ship fast.",
    features: [
      "All Pro features",
      "Team collaboration",
      "Role-based access",
    ],
  },
];

export function getPlanById(id?: string | null) {
  if (!id) return undefined;
  return plans.find((p) => p.id === id);
}
