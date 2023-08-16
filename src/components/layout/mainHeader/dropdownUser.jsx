import Dropdown from 'react-bootstrap/Dropdown';
import stylse from './mainHeader.module.css';
import user from '../../../../public/svgs/user.svg'
import Image from 'next/image';

export function DropDownUser({user}) {
    if(!user)return
  return (
    <Dropdown>
      <Dropdown.Toggle className={`${stylse.dropdownbutton}`} variant="none" id="dropdown-basic">
       <Image src={user} width={20} height={20}/>
       Hello,{
        user.displayName
       }
      </Dropdown.Toggle>

      <Dropdown.Menu className={`${stylse.menu}`}>
        <Dropdown.Item  className={`${stylse.item}`} href="#/action-1">Account</Dropdown.Item>
        <Dropdown.Item   className={`${stylse.item}`}href="#/action-2">Log out</Dropdown.Item>
       </Dropdown.Menu>
    </Dropdown>
  );
}
