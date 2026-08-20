import { createFileRoute } from "@tanstack/react-router";
import { Building2, CalendarCheck, ShieldCheck, Wallet } from "lucide-react";

import { PageHeader } from "@/components/admin/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const title = "Dashboard — Doofy Admin";
const description = "Platform-wide overview of organizations, providers, bookings and revenue.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Organizations", value: "128", icon: Building2 },
  { label: "Active Bookings", value: "1,904", icon: CalendarCheck },
  { label: "Pending Verifications", value: "37", icon: ShieldCheck },
  { label: "Revenue (30d)", value: "₹18.4L", icon: Wallet },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" description={description} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 py-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <stat.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="font-display text-2xl font-semibold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Activity feed lands here in the dashboard module pass.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Needs attention</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Escalated complaints and stalled verifications will surface here.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
