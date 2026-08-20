import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/reports")({
  head: () => ({
    meta: [
      { title: "Reports — Finance — Doofy Admin" },
      { name: "description", content: "Exportable financial reports and statements." },
      { property: "og:title", content: "Reports — Finance — Doofy Admin" },
      { property: "og:description", content: "Exportable financial reports and statements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reports" description="Exportable financial reports and statements." />
      <ModulePlaceholder label="Finance · Reports" />
    </div>
  );
}
