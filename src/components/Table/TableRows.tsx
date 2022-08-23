import { TableBody, TableCell, TableRow } from "@mui/material";

interface DefaultTableRowProps {
  headers: string[];
  data: any;
}

function TableRows({ headers, data }: DefaultTableRowProps) {
  return (
    <TableBody>
      <>
        {
          // @ts-expect-error
          data.map((d) => (
            <TableRow>
              {headers.map((head) => {
                return (
                  <TableCell>
                    {head === "projects" ? JSON.stringify(d[head]) : d[head]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        }
      </>
    </TableBody>
  );
}

export default TableRows;
