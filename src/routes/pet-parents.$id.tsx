import { createFileRoute } from "@tanstack/react-router";
import { DetailShell } from "@/components/admin/DetailShell";

export const Route = createFileRoute("/pet-parents/$id")({
  head: ({ params }) => {
    const title = `Pet Parent ${params.id} — Doofy Admin`;
    const description = "Full pet parent record, activity timeline and admin actions.";
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
  return <DetailShell module="pet-parents" moduleLabel="Pet Parents" singular="Pet Parent" id={id} />;
}
