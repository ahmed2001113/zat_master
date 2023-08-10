import Dropdown from 'react-bootstrap/Dropdown';
import styles from './dropdown.module.css'
import Image from 'next/image';
 function DropDownMenu({options,onChange,text,icon,...rest}) {
    console.log(icon)
  return (
    <Dropdown  name="filter" onChange={onChange} {...rest}>
      <Dropdown.Toggle className={`${styles.basic}`}  id="dropdown-basic">
        {text} 
        {icon? <Image src={icon} width={30} height={30}  alt='filter' />:''}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;