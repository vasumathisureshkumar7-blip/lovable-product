import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/payments")({
  head: () => ({
    meta: [
      { title: "Payments — Finance — Doofy Admin" },
      { name: "description", content: "Incoming payments and their settlement status." },
      { property: "og:title", content: "Payments — Finance — Doofy Admin" },
      { property: "og:description", content: "Incoming payments and their settlement status." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Payments" description="Incoming payments and their settlement status." />
      <ModulePlaceholder label="Finance · Payments" />
    </div>
  );
}
