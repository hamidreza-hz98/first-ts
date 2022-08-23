import { TableBody, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { allEmployees } from "./../../store/employees/employeesSlice";

interface DefaultTableRowProps {
  headers: string[];
}

function TableRows({ headers }: DefaultTableRowProps) {
  const employees = useSelector(allEmployees);
  return (
    <TableBody>
      <>
        {employees.map((employee: any) => (
          <TableRow key={employee.id}>
            {headers.map((head) => {
              return (
                <TableCell key={head}>
                  {head === "projects"
                    ? JSON.stringify(employee[head])
                    : employee[head]}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </>
    </TableBody>
  );
}

export default TableRows;
