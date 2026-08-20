import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/refunds")({
  head: () => ({
    meta: [
      { title: "Refunds — Finance — Doofy Admin" },
      { name: "description", content: "Refund requests, approvals and processed returns." },
      { property: "og:title", content: "Refunds — Finance — Doofy Admin" },
      { property: "og:description", content: "Refund requests, approvals and processed returns." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Refunds" description="Refund requests, approvals and processed returns." />
      <ModulePlaceholder label="Finance · Refunds" />
    </div>
  );
}
