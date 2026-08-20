import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/commissions")({
  head: () => ({
    meta: [
      { title: "Commissions — Finance — Doofy Admin" },
      { name: "description", content: "Commission rules and platform take-rate." },
      { property: "og:title", content: "Commissions — Finance — Doofy Admin" },
      { property: "og:description", content: "Commission rules and platform take-rate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Commissions" description="Commission rules and platform take-rate." />
      <ModulePlaceholder label="Finance · Commissions" />
    </div>
  );
}
