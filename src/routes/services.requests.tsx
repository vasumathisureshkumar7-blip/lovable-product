import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/services/requests")({
  head: () => ({
    meta: [
      { title: "Service Requests — Veterinary Services — Doofy Admin" },
      { name: "description", content: "Incoming veterinary service requests awaiting action." },
      { property: "og:title", content: "Service Requests — Veterinary Services — Doofy Admin" },
      {
        property: "og:description",
        content: "Incoming veterinary service requests awaiting action.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Service Requests"
        description="Incoming veterinary service requests awaiting action."
      />
      <ModulePlaceholder label="Veterinary Services · Service Requests" />
    </div>
  );
}
