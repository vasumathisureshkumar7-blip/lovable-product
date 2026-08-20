import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/access-history")({
  head: () => ({
    meta: [
      { title: "Access History — Doofy Admin" },
      { name: "description", content: "Sign-in sessions and admin access records." },
      { property: "og:title", content: "Access History — Doofy Admin" },
      { property: "og:description", content: "Sign-in sessions and admin access records." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Access History" description="Sign-in sessions and admin access records." />
      <ModulePlaceholder label="Access History" />
    </div>
  );
}
