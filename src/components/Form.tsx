import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import DataTable from "./Table/DataTable";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  allEmployees,
} from "../store/employees/employeesSlice";

export type FormTypes = {
  name: string;
  age: number | null;
  work?: string;
  projects: string[];
  id: string;
};

function Form() {
  const dispatch = useDispatch();
  const employees = useSelector(allEmployees);
  const [projects, setProjects] = useState<string[]>([]);
  const defaultValues: FormTypes = {
    name: "",
    age: null,
    work: "",
    projects: [],
    id: "",
  };

  const { register, handleSubmit, setValue } = useForm({ defaultValues });

  const submitForm = (data: FormTypes) => {
    data.id = uuidv4();
    dispatch(createEmployee(data));
    console.log(employees);
  };

  const addProject = (e: SelectChangeEvent<typeof projects>) => {
    const {
      target: { value },
    } = e;

    setProjects(typeof value === "string" ? value.split(",") : value);
    setValue("projects", typeof value === "string" ? value.split(",") : value);
  };

  const headers = ["name", "age", "work", "projects"];

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <Grid container>
          <Grid item xs={6} sx={{ pt: 2 }}>
            <TextField {...register("name")} label="Name" />
          </Grid>
          <Grid item xs={6} sx={{ pt: 2 }}>
            <TextField
              {...register("age")}
              type="number"
              id="age"
              label="Age"
            />
          </Grid>
          <Grid item xs={6} sx={{ pt: 2 }}>
            <TextField
              {...register("work")}
              label="Work"
              type="text"
              id="work"
            />
          </Grid>
          <Grid item xs={6} sx={{ pt: 2 }}>
            <Select
              fullWidth
              label="Projects"
              multiple
              value={projects}
              onChange={addProject}
              input={<OutlinedInput label="Project" />}
              id="projects"
            >
              <MenuItem value="Sana">Sana</MenuItem>
              <MenuItem value="Abryad">Abryad</MenuItem>
              <MenuItem value="Global">Global</MenuItem>
              <MenuItem value="ESG">ESG</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sx={{ pt: 2 }}>
            <Button fullWidth type="submit" variant="outlined">
              Create Person
            </Button>
          </Grid>
        </Grid>
      </form>
      <DataTable headers={headers} data={employees} />
    </>
  );
}

export default Form;
