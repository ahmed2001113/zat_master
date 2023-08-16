import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SortDropDown({
    name,
    label,
    options=[],
    defaultValue='',
    onChange,
    ...others
}) {
   return (
    <Form.Select
    name={name}
    onChange={onChange}
    defaultValue={defaultValue} {...others}>

        
  
      <option>{label}</option>
  {
   options.length&& options.map((option,key)=>{
    return <option key={key} value={option.value}>
    {option.label}
</option>
    
   })
  }
  </Form.Select>
  );
}
