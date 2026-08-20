import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Doofy Admin" },
      { name: "description", content: "Platform configuration, roles and preferences." },
      { property: "og:title", content: "Settings — Doofy Admin" },
      { property: "og:description", content: "Platform configuration, roles and preferences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Platform configuration, roles and preferences." />
      <ModulePlaceholder label="Settings" />
    </div>
  );
}
