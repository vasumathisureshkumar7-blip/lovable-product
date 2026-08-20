import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/communication")({
  head: () => ({
    meta: [
      { title: "Communication — Doofy Admin" },
      { name: "description", content: "Broadcasts, message templates and delivery logs." },
      { property: "og:title", content: "Communication — Doofy Admin" },
      { property: "og:description", content: "Broadcasts, message templates and delivery logs." },
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
        title="Communication"
        description="Broadcasts, message templates and delivery logs."
      />
      <ModulePlaceholder label="Communication" />
    </div>
  );
}
