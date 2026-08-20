import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModuleTable } from "@/components/admin/ModuleTable";

export const Route = createFileRoute("/complaints/")({
  head: () => ({
    meta: [
      { title: "Complaints — Doofy Admin" },
      { name: "description", content: "Escalations and disputes raised on the platform." },
      { property: "og:title", content: "Complaints — Doofy Admin" },
      { property: "og:description", content: "Escalations and disputes raised on the platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Complaints" description="Escalations and disputes raised on the platform." />
      <ModuleTable module="complaints" singular="Complaint" />
    </div>
  );
}
