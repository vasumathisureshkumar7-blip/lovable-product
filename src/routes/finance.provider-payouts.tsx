import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/provider-payouts")({
  head: () => ({
    meta: [
      { title: "Provider Payouts — Finance — Doofy Admin" },
      { name: "description", content: "Payout batches and provider settlement schedules." },
      { property: "og:title", content: "Provider Payouts — Finance — Doofy Admin" },
      { property: "og:description", content: "Payout batches and provider settlement schedules." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Provider Payouts" description="Payout batches and provider settlement schedules." />
      <ModulePlaceholder label="Finance · Provider Payouts" />
    </div>
  );
}
