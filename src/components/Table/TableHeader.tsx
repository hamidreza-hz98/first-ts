import { TableCell, TableHead, TableRow } from "@mui/material";

type TableHeadProps = {
  headers: string[];
};

function TableHeader({ headers }: TableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {headers.map((item) => {
          return <TableCell key={item}>{item}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
