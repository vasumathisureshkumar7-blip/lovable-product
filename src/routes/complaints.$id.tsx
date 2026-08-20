import { createFileRoute } from "@tanstack/react-router";
import { DetailShell } from "@/components/admin/DetailShell";

export const Route = createFileRoute("/complaints/$id")({
  head: ({ params }) => {
    const title = `Complaint ${params.id} — Doofy Admin`;
    const description = "Full complaint record, activity timeline and admin actions.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { id } = Route.useParams();
  return <DetailShell module="complaints" moduleLabel="Complaints" singular="Complaint" id={id} />;
}
