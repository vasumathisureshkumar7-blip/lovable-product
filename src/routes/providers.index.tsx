import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModuleTable } from "@/components/admin/ModuleTable";

export const Route = createFileRoute("/providers/")({
  head: () => ({
    meta: [
      { title: "Providers — Doofy Admin" },
      { name: "description", content: "Service providers, availability and performance." },
      { property: "og:title", content: "Providers — Doofy Admin" },
      { property: "og:description", content: "Service providers, availability and performance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Providers" description="Service providers, availability and performance." />
      <ModuleTable module="providers" singular="Provider" />
    </div>
  );
}
