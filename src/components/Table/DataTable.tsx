import { Table } from "@mui/material";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import { FormTypes } from "../Form";
type TableDataProps = {
  headers: string[];
  data: FormTypes[];
};

function DataTable({ headers, data }: TableDataProps) {
  return (
    <Table>
      <TableHeader headers={headers} />
      <TableRows headers={headers} data={data} />
    </Table>
  );
}

export default DataTable;
