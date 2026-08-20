import { LayoutTemplate } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ModulePlaceholder({ label }: { label: string }) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <LayoutTemplate className="size-5" />
        </span>
        <div>
          <p className="font-medium text-foreground">{label}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Module shell is wired up. Detailed functionality lands here next.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
