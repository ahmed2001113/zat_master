import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
    const onChange =(e)=>{
        console.log(e.target.name,e.target.value,e.target)
    }
  return (
    <FormGroup 
   onChange={onChange}>
      <FormControlLabel control={<Checkbox defaultChecked />}   name='change'  label="Label" />
      <FormControlLabel   control={<Checkbox />}   name='label'  label="Required" />
      <FormControlLabel disabled control={<Checkbox />}  name='change'  label="Disabled" />
    </FormGroup>
  );
}