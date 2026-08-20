import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  PawPrint,
  CalendarCheck,
  Stethoscope,
  ShieldCheck,
  Star,
  MessageSquareWarning,
  Wallet,
  BarChart3,
  Megaphone,
  History,
  ScrollText,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type AdminNavChild = {
  title: string;
  url: string;
  exact?: boolean;
};

export type AdminNavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  exact?: boolean;
  children?: AdminNavChild[];
};

export const adminNavigation: AdminNavItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, exact: true },
  { title: "Organizations", url: "/organizations", icon: Building2 },
  { title: "Providers", url: "/providers", icon: BriefcaseBusiness },
  { title: "Pet Parents", url: "/pet-parents", icon: PawPrint },
  { title: "Bookings", url: "/bookings", icon: CalendarCheck },
  {
    title: "Veterinary Services",
    url: "/services",
    icon: Stethoscope,
    children: [
      { title: "Service Catalogue", url: "/services", exact: true },
      { title: "Categories", url: "/services/categories" },
      { title: "Service Requests", url: "/services/requests" },
    ],
  },
  { title: "Verification", url: "/verification", icon: ShieldCheck },
  { title: "Reviews & Moderation", url: "/reviews", icon: Star },
  { title: "Complaints & Disputes", url: "/complaints", icon: MessageSquareWarning },
  {
    title: "Finance",
    url: "/finance",
    icon: Wallet,
    children: [
      { title: "Overview", url: "/finance", exact: true },
      { title: "Transactions", url: "/finance/transactions" },
      { title: "Payments", url: "/finance/payments" },
      { title: "Refunds", url: "/finance/refunds" },
      { title: "Invoices", url: "/finance/invoices" },
      { title: "Subscriptions", url: "/finance/subscriptions" },
      { title: "Provider Payouts", url: "/finance/provider-payouts" },
      { title: "Organization Earnings", url: "/finance/organization-earnings" },
      { title: "Commissions", url: "/finance/commissions" },
      { title: "Financial Reports", url: "/finance/reports" },
    ],
  },
  { title: "Analytics & Reports", url: "/analytics", icon: BarChart3 },
  { title: "Communication", url: "/communication", icon: Megaphone },
  { title: "Access History", url: "/access-history", icon: History },
  { title: "Audit Logs", url: "/audit-logs", icon: ScrollText },
  { title: "Settings & Configuration", url: "/settings", icon: Settings },
];
