import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Doofy Admin" },
      { name: "description", content: "Ratings and review moderation across providers." },
      { property: "og:title", content: "Reviews — Doofy Admin" },
      { property: "og:description", content: "Ratings and review moderation across providers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reviews" description="Ratings and review moderation across providers." />
      <ModulePlaceholder label="Reviews" />
    </div>
  );
}
