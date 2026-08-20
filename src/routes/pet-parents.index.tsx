import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModuleTable } from "@/components/admin/ModuleTable";

export const Route = createFileRoute("/pet-parents/")({
  head: () => ({
    meta: [
      { title: "Pet Parents — Doofy Admin" },
      { name: "description", content: "Pet parent accounts, pets and activity." },
      { property: "og:title", content: "Pet Parents — Doofy Admin" },
      { property: "og:description", content: "Pet parent accounts, pets and activity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pet Parents" description="Pet parent accounts, pets and activity." />
      <ModuleTable module="pet-parents" singular="Pet Parent" />
    </div>
  );
}
