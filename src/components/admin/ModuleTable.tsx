import { Link } from "@tanstack/react-router";
import { ChevronRight, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type ModuleSlug =
  | "organizations"
  | "providers"
  | "pet-parents"
  | "bookings"
  | "verification"
  | "complaints";

const detailRoute = {
  organizations: "/organizations/$id",
  providers: "/providers/$id",
  "pet-parents": "/pet-parents/$id",
  bookings: "/bookings/$id",
  verification: "/verification/$id",
  complaints: "/complaints/$id",
} as const;

const statuses = ["Active", "Pending", "Review", "Suspended"] as const;

function rows(module: ModuleSlug, singular: string) {
  return Array.from({ length: 6 }, (_, i) => ({
    id: `${module.slice(0, 3).toUpperCase()}-${1000 + i}`,
    name: `${singular} ${i + 1}`,
    status: statuses[i % statuses.length],
    updated: `${i + 1}d ago`,
  }));
}

export function ModuleTable({ module, singular }: { module: ModuleSlug; singular: string }) {
  const data = rows(module, singular);

  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder={`Search ${singular.toLowerCase()}s`} className="pl-9" />
        </div>
        <Button variant="outline" size="sm">
          Filters
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead className="w-24 text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">{row.id}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>
                <Badge variant={row.status === "Suspended" ? "destructive" : "secondary"}>
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{row.updated}</TableCell>
              <TableCell className="text-right">
                <Button asChild variant="ghost" size="sm">
                  <Link to={detailRoute[module]} params={{ id: row.id }}>
                    View
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
