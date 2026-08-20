import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

const financeNav = [
  { title: "Overview", to: "/finance", exact: true },
  { title: "Transactions", to: "/finance/transactions" },
  { title: "Payments", to: "/finance/payments" },
  { title: "Refunds", to: "/finance/refunds" },
  { title: "Invoices", to: "/finance/invoices" },
  { title: "Subscriptions", to: "/finance/subscriptions" },
  { title: "Provider Payouts", to: "/finance/provider-payouts" },
  { title: "Organization Earnings", to: "/finance/organization-earnings" },
  { title: "Commissions", to: "/finance/commissions" },
  { title: "Reports", to: "/finance/reports" },
] as const;

export const Route = createFileRoute("/finance")({
  component: FinanceLayout,
});

function FinanceLayout() {
  return (
    <div className="space-y-6">
      <nav className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-card p-1">
        {financeNav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: "exact" in item ? item.exact : false }}
            className={cn(
              "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
              "data-[status=active]:bg-primary data-[status=active]:text-primary-foreground",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
