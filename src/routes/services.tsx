import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Doofy Admin" },
      { name: "description", content: "Service catalogue, categories and pricing rules." },
      { property: "og:title", content: "Services — Doofy Admin" },
      { property: "og:description", content: "Service catalogue, categories and pricing rules." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Services" description="Service catalogue, categories and pricing rules." />
      <ModulePlaceholder label="Services" />
    </div>
  );
}
