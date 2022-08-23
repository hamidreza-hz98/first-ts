import React from 'react'; 
import { FormControl, InputLabel, Input } from '@mui/material';

type FieldProps = {
  type : string;
  id: string;
  label : string;
}

const Field = ({type, id, label} : FieldProps) => { 
  return(
    <FormControl>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input  placeholder={label} type={type} id={id}  />
      </FormControl>
  )
 }

 export default Field