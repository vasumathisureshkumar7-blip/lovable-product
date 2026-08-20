import { Link } from "@tanstack/react-router";
import { PawPrint } from "lucide-react";

import { SidebarHeader } from "@/components/ui/sidebar";

export function AdminSidebarHeader() {
  return (
    <SidebarHeader className="border-b border-sidebar-border">
      <Link to="/" className="flex items-center gap-2 px-2 py-2">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <PawPrint className="size-4" />
        </span>
        <span className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
          <span className="font-display text-base font-semibold">Doofy</span>
          <span className="text-xs text-muted-foreground">Admin Console</span>
        </span>
      </Link>
    </SidebarHeader>
  );
}
