import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/organization-earnings")({
  head: () => ({
    meta: [
      { title: "Organization Earnings — Finance — Doofy Admin" },
      { name: "description", content: "Earnings accrued by each organization." },
      { property: "og:title", content: "Organization Earnings — Finance — Doofy Admin" },
      { property: "og:description", content: "Earnings accrued by each organization." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Organization Earnings" description="Earnings accrued by each organization." />
      <ModulePlaceholder label="Finance · Organization Earnings" />
    </div>
  );
}
