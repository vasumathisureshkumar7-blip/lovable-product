import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/")({
  head: () => ({
    meta: [
      { title: "Overview — Finance — Doofy Admin" },
      { name: "description", content: "Finance health, balances and key money metrics." },
      { property: "og:title", content: "Overview — Finance — Doofy Admin" },
      { property: "og:description", content: "Finance health, balances and key money metrics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Overview" description="Finance health, balances and key money metrics." />
      <ModulePlaceholder label="Finance · Overview" />
    </div>
  );
}
