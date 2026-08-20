import { createFileRoute } from "@tanstack/react-router";
import { DetailShell } from "@/components/admin/DetailShell";

export const Route = createFileRoute("/verification/$id")({
  head: ({ params }) => {
    const title = `Verification ${params.id} — Doofy Admin`;
    const description = "Full verification record, activity timeline and admin actions.";
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
  return <DetailShell module="verification" moduleLabel="Verification" singular="Verification" id={id} />;
}
