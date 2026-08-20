import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/admin/PageHeader";
import type { ModuleSlug } from "@/components/admin/ModuleTable";

const listRoute = {
  organizations: "/organizations",
  providers: "/providers",
  "pet-parents": "/pet-parents",
  bookings: "/bookings",
  verification: "/verification",
  complaints: "/complaints",
} as const;

export function DetailShell({
  module,
  moduleLabel,
  singular,
  id,
}: {
  module: ModuleSlug;
  moduleLabel: string;
  singular: string;
  id: string;
}) {
  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" size="sm" className="-ml-2">
        <Link to={listRoute[module]}>
          <ArrowLeft className="size-4" />
          Back to {moduleLabel}
        </Link>
      </Button>

      <PageHeader
        title={`${singular} ${id}`}
        description={`Full ${singular.toLowerCase()} record, activity timeline and admin actions.`}
        actions={
          <>
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button size="sm">Edit</Button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              {["overview", "activity", "documents", "notes"].map((tab) => (
                <TabsContent key={tab} value={tab} className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    {singular} {tab} content will be implemented in the {moduleLabel} module pass.
                  </p>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Record ID</span>
              <span className="font-mono text-xs">{id}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Module</span>
              <span>{moduleLabel}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
