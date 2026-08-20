import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModuleTable } from "@/components/admin/ModuleTable";

export const Route = createFileRoute("/verification/")({
  head: () => ({
    meta: [
      { title: "Verification — Doofy Admin" },
      { name: "description", content: "Documents and identity checks awaiting review." },
      { property: "og:title", content: "Verification — Doofy Admin" },
      { property: "og:description", content: "Documents and identity checks awaiting review." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Verification" description="Documents and identity checks awaiting review." />
      <ModuleTable module="verification" singular="Verification" />
    </div>
  );
}
