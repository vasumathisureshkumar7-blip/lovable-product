import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/PageHeader";
import { ModuleTable } from "@/components/admin/ModuleTable";

export const Route = createFileRoute("/bookings/")({
  head: () => ({
    meta: [
      { title: "Bookings — Doofy Admin" },
      { name: "description", content: "All bookings across the platform and their lifecycle." },
      { property: "og:title", content: "Bookings — Doofy Admin" },
      { property: "og:description", content: "All bookings across the platform and their lifecycle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader title="Bookings" description="All bookings across the platform and their lifecycle." />
      <ModuleTable module="bookings" singular="Booking" />
    </div>
  );
}
