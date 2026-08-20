import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  PawPrint,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  MessageSquareWarning,
  Star,
  Wallet,
  Percent,
  Bell,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const adminNavigation = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, exact: true },
  { title: "Organizations", url: "/organizations", icon: Building2 },
  { title: "Providers", url: "/providers", icon: BriefcaseBusiness },
  { title: "Pet Parents", url: "/pet-parents", icon: PawPrint },
  { title: "Bookings", url: "/bookings", icon: CalendarCheck },
  { title: "Services", url: "/services", icon: Sparkles },
  { title: "Verification", url: "/verification", icon: ShieldCheck },
  { title: "Complaints", url: "/complaints", icon: MessageSquareWarning },
  { title: "Reviews", url: "/reviews", icon: Star },
  { title: "Finance", url: "/finance", icon: Wallet },
  { title: "Promotions", url: "/promotions", icon: Percent },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Content", url: "/content", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
] as const;

export function AdminSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  const isActive = (url: string, exact?: boolean) =>
    exact ? pathname === url : pathname === url || pathname.startsWith(url + "/");

  return (
    <Sidebar collapsible="icon">
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

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminNavigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive(item.url, "exact" in item ? item.exact : false)}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
