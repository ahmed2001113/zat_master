 import Link from 'next/link';
 import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './sign.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EMAILSIGNUPSTART } from '@/src/store/user/user.actions';
const initialData = {
firstName:'',
lastName:'',
email:'',
password:''

}

function signup() {
  const dispatch = useDispatch();
  const [firebaseError,setFirebaseError]=useState("")
  const [data,setData]=useState(initialData);
  const {firstName,lastName,email,password} = data;
  const setForm = ()=>{
    setData(initialData)
}
  const onSubmit =(e)=>{
e.preventDefault();
if(!data.firstName&&!data.lastName&&!data.email&&!data.password) return;

dispatch(EMAILSIGNUPSTART({email,password,displayName:firstName}));


  }
  const onChange = (e)=>{
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })

  }
   return (
  <div className={`container ${styles.cooo}`}>

<h1>create account</h1>

<form onSubmit={onSubmit}> 
 
<>
      <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-3"
aria-required
      >
        <Form.Control required onChange={onChange} name='firstName' type="text"   placeholder="mohamed..." />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="LastName"
        className="mb-3"
      >
        <Form.Control type="text" required   onChange={onChange}  name='lastName' placeholder="..." />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control name='email' required  onChange={onChange}  type="email" placeholder="..." />
      </FloatingLabel>
   
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control name='password'  required onChange={onChange}  type="password" placeholder="Password" />
      </FloatingLabel>
      <button className='submit mt-3' type='submit'> 
 create account
 </button>
<h6>Already Have Account </h6>
<button className='submit mt-3'> 
      <Link className='submit' href={`/auth/signin`}>
Sign In
</Link>
</button>
    </>
  
</form>

    </div>
  )
}

export default signup