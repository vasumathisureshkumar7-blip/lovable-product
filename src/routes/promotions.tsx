import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/promotions")({
  head: () => ({
    meta: [
      { title: "Promotions — Doofy Admin" },
      { name: "description", content: "Coupons, campaigns and referral programmes." },
      { property: "og:title", content: "Promotions — Doofy Admin" },
      { property: "og:description", content: "Coupons, campaigns and referral programmes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Promotions" description="Coupons, campaigns and referral programmes." />
      <ModulePlaceholder label="Promotions" />
    </div>
  );
}
