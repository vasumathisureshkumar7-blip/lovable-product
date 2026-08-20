import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/subscriptions")({
  head: () => ({
    meta: [
      { title: "Subscriptions — Finance — Doofy Admin" },
      { name: "description", content: "Recurring plans held by organizations and providers." },
      { property: "og:title", content: "Subscriptions — Finance — Doofy Admin" },
      { property: "og:description", content: "Recurring plans held by organizations and providers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Subscriptions" description="Recurring plans held by organizations and providers." />
      <ModulePlaceholder label="Finance · Subscriptions" />
    </div>
  );
}
