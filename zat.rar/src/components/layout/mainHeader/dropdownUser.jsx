import Dropdown from 'react-bootstrap/Dropdown';
import stylse from './mainHeader.module.css';
  import { useDispatch } from 'react-redux';
import { SIGNUSEROUT_Start } from '@/src/store/user/user.actions';
import { useRouter } from 'next/router';

export function DropDownUser({user}) {
  const router = useRouter()
  const dispatch = useDispatch();
    if(!user)return;
    const signoutUser = ()=>{
 
        dispatch(SIGNUSEROUT_Start())
     
    }
  return (
    <Dropdown>
      <Dropdown.Toggle className={`${stylse.dropdownbutton}`} variant="none" id="dropdown-basic">
      <i className="fa-regular fa-user"></i>
       Hello,{
        user.displayName
       }
      </Dropdown.Toggle>

      <Dropdown.Menu className={`${stylse.men}`}>
        <Dropdown.Item  className={`${stylse.item}`} onClick={()=>router.push('/account')}>
          Account
          
          </Dropdown.Item>
        <Dropdown.Item   className={`${stylse.item}`} onClick={signoutUser}>Log out</Dropdown.Item>
       </Dropdown.Menu>
    </Dropdown>
  );
}
