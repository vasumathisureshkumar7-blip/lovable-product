import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModuleTable } from "@/components/admin/ModuleTable";

export const Route = createFileRoute("/organizations/")({
  head: () => ({
    meta: [
      { title: "Organizations — Doofy Admin" },
      { name: "description", content: "Registered organizations and their operating status." },
      { property: "og:title", content: "Organizations — Doofy Admin" },
      { property: "og:description", content: "Registered organizations and their operating status." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Organizations" description="Registered organizations and their operating status." />
      <ModuleTable module="organizations" singular="Organization" />
    </div>
  );
}
