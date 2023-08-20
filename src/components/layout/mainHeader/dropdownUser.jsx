import Dropdown from 'react-bootstrap/Dropdown';
import stylse from './mainHeader.module.css';
import user from '../../../../public/svgs/user.svg'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { SIGNUSEROUT_Start } from '@/src/store/user/user.actions';

export function DropDownUser({user}) {
    if(!user)return;
    const dispatch = useDispatch();
    const signoutUser = ()=>{
 
        dispatch(SIGNUSEROUT_Start())
     
    }
  return (
    <Dropdown>
      <Dropdown.Toggle className={`${stylse.dropdownbutton}`} variant="none" id="dropdown-basic">
      <i class="fa-regular fa-user"></i>
       Hello,{
        user.displayName
       }
      </Dropdown.Toggle>

      <Dropdown.Menu className={`${stylse.men}`}>
        <Dropdown.Item  className={`${stylse.item}`} href="#/action-1">Account</Dropdown.Item>
        <Dropdown.Item   className={`${stylse.item}`} onClick={signoutUser}>Log out</Dropdown.Item>
       </Dropdown.Menu>
    </Dropdown>
  );
}
