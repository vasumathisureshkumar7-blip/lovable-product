import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Doofy Admin" },
      { name: "description", content: "Platform-wide performance and growth metrics." },
      { property: "og:title", content: "Analytics — Doofy Admin" },
      { property: "og:description", content: "Platform-wide performance and growth metrics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" description="Platform-wide performance and growth metrics." />
      <ModulePlaceholder label="Analytics" />
    </div>
  );
}
