import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/transactions")({
  head: () => ({
    meta: [
      { title: "Transactions — Finance — Doofy Admin" },
      { name: "description", content: "Every money movement recorded on the platform." },
      { property: "og:title", content: "Transactions — Finance — Doofy Admin" },
      { property: "og:description", content: "Every money movement recorded on the platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Transactions" description="Every money movement recorded on the platform." />
      <ModulePlaceholder label="Finance · Transactions" />
    </div>
  );
}
