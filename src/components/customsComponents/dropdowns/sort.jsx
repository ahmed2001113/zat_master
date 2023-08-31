import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
 import Dropdown from 'react-bootstrap/Dropdown';

export default function SortDropDown({
    name,
    label,
    options=[],
    defaultValue='',
    onChange,
    ...others
}) {
  console.log(options)
  return (
    <FormControl  variant="standard" sx={{ width:150 ,marginTop:0}} size="small">
    <InputLabel className='sortLabel' >Sort By</InputLabel>
    <Select
       label="sort"
      onChange={onChange}
      required
      name="sort"
      {...others}
    >
      
      {options.map(option=>{
        return(
          <MenuItem key={option.key} value={option.value}>
            
            {
              option.label
            }
          </MenuItem>

        )
      })}

    </Select>
  </FormControl>
  );
}
