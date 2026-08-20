import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/content")({
  head: () => ({
    meta: [
      { title: "Content — Doofy Admin" },
      { name: "description", content: "CMS pages, banners and policy documents." },
      { property: "og:title", content: "Content — Doofy Admin" },
      { property: "og:description", content: "CMS pages, banners and policy documents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Content" description="CMS pages, banners and policy documents." />
      <ModulePlaceholder label="Content" />
    </div>
  );
}
