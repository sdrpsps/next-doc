import { TableCell, TableRow } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";
import { SiGoogledocs } from "react-icons/si";
import { Building2Icon, CircleUserIcon, MoveVertical } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface DocumentRowProps {
  document: Doc<"document">;
}

export const DocumentRow = ({ document }: DocumentRowProps) => {
  return (
    <TableRow className="cursor-pointer">
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]">{document.title}</TableCell>
      <TableCell className="text-muted-foreground hidden md:table-cell">
        <div className="flex gap-2 items-center">
          {document.organizationId ? (
            <Building2Icon className="size-4" />
          ) : (
            <CircleUserIcon className="size-4" />
          )}
          {document.organizationId ? "Organization" : "Personal"}
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground hidden md:table-cell">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoveVertical className="size-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
