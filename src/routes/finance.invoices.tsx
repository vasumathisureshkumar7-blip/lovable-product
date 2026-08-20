import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/finance/invoices")({
  head: () => ({
    meta: [
      { title: "Invoices — Finance — Doofy Admin" },
      { name: "description", content: "Issued invoices and billing documents." },
      { property: "og:title", content: "Invoices — Finance — Doofy Admin" },
      { property: "og:description", content: "Issued invoices and billing documents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Invoices" description="Issued invoices and billing documents." />
      <ModulePlaceholder label="Finance · Invoices" />
    </div>
  );
}
