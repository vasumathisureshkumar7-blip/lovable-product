import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Service Catalogue — Veterinary Services — Doofy Admin" },
      { name: "description", content: "Veterinary service catalogue and pricing rules." },
      { property: "og:title", content: "Service Catalogue — Veterinary Services — Doofy Admin" },
      { property: "og:description", content: "Veterinary service catalogue and pricing rules." },
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
        title="Service Catalogue"
        description="Veterinary service catalogue and pricing rules."
      />
      <ModulePlaceholder label="Veterinary Services · Service Catalogue" />
    </div>
  );
}
