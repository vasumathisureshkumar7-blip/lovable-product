import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { AdminSidebarHeader } from "@/components/admin/AdminSidebarHeader";
import { AdminSidebarNavigation } from "@/components/admin/AdminSidebarNavigation";

export function AdminSidebar() {
  return (
    <Sidebar collapsible="icon">
      <AdminSidebarHeader />
      <SidebarContent>
        <AdminSidebarNavigation />
      </SidebarContent>
    </Sidebar>
  );
}
