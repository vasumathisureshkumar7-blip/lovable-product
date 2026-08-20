import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/audit-logs")({
  head: () => ({
    meta: [
      { title: "Audit Logs — Doofy Admin" },
      { name: "description", content: "Traceable record of every administrative action." },
      { property: "og:title", content: "Audit Logs — Doofy Admin" },
      { property: "og:description", content: "Traceable record of every administrative action." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Audit Logs"
        description="Traceable record of every administrative action."
      />
      <ModulePlaceholder label="Audit Logs" />
    </div>
  );
}
