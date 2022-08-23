import { Table } from "@mui/material";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

const headers = ["name", "age", "work", "projects"];

function DataTable() {
  return (
    <Table>
      <TableHeader headers={headers} />
      <TableRows headers={headers} />
    </Table>
  );
}

export default DataTable;
