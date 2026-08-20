import { createFileRoute } from "@tanstack/react-router";
import { DetailShell } from "@/components/admin/DetailShell";

export const Route = createFileRoute("/organizations/$id")({
  head: ({ params }) => {
    const title = `Organization ${params.id} — Doofy Admin`;
    const description = "Full organization record, activity timeline and admin actions.";
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
  return <DetailShell module="organizations" moduleLabel="Organizations" singular="Organization" id={id} />;
}
