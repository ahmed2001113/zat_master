import { MenuItem, Select } from '@mui/material';
import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SortDropDown({
    name,
    label,
    options=[],
    defaultValue='sort',
    onChange,
    ...others
}) {
   return (
    <Select
    name={name}
    onChange={onChange}
    defaultValue={defaultValue} {...others}
     
    >
 
 
  {
   options.length&& options.map((option,key)=>{
    return <MenuItem  key={key} value={option.value}>
    {option.label}
</MenuItem>
    
   })
  }
  </Select>
  );
}
