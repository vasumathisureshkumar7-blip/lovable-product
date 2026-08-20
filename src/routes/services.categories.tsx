import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/services/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Veterinary Services — Doofy Admin" },
      { name: "description", content: "Categories used to group veterinary services." },
      { property: "og:title", content: "Categories — Veterinary Services — Doofy Admin" },
      { property: "og:description", content: "Categories used to group veterinary services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Categories" description="Categories used to group veterinary services." />
      <ModulePlaceholder label="Veterinary Services · Categories" />
    </div>
  );
}
