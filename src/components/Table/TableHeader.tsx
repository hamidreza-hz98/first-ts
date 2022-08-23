import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

type TableHeadProps = {
  headers: string[];
};

function TableHeader({ headers }: TableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {headers.map((item) => {
          return <TableCell>{item}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
