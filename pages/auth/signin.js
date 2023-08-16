 import Link from 'next/link';
import React, { useState ,useEffect} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './sign.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { EmailSignInStart } from '@/src/store/user/user.actions';
import { ErrorMessageSelector } from '@/src/store/user/user.selector';
const intial ={email:'',password:''};

const  Signin=() =>{
  const err = useSelector(ErrorMessageSelector)
  const [firebaseError,setFirebaseError]=useState("")
  const dispatch = useDispatch()
  const [data,setFormData]=useState(intial);
  const{email,password}=data
  const resetForm = ()=>{
    setFormData(intial)
}

  const onsubmit=(e)=>{
e.preventDefault();
if(!data.name&&!data.password)return;

dispatch(EmailSignInStart({email,password}))


  }
  const onChange= (e)=>{
const {name,value}=e.target
setFormData({
  ...data,
  [name]:value
})
  };

  useEffect(  ()=>{
 
    if(err &&err.error !==null && err.error.message !=='' ){
        console.log(err.error.code)
switch(err.error.code){
case 'auth/invalid-email':
   return setFirebaseError('please check your email')
 case 'auth/user-not-found':
    return setFirebaseError('please check your email or password')
    case'auth/wrong-password':
return setFirebaseError('check up your Passwords  ');

default:

return setFirebaseError('')


}
    } 
    

 
},[err.error ])
  return (
    <div className='container mt-5'>

<div className='row main'>
<div className={`col-md-6 ${styles.left}`}>
<div className={`${styles.g}`}>
    
<h1>
      Welcom Back !
    </h1>

    <h5>Sign in for a more personalized experience</h5>
</div>

<form onSubmit={onsubmit}>
 
<>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control required name='email' onChange={onChange} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control required onChange={onChange} name='password' type="password" placeholder="Password" />
      </FloatingLabel>
      <button className='submit mt-3'  type='submit'> 
     
  sign in
</button>
{firebaseError&&
        <p className='errorMessage'>
        {firebaseError}
        </p>}
    </>
  
</form>

</div>
<div className={`col-md-6 ${styles.right}`}>
  <h1>Sign Up</h1>
  <h3>
  Sign up now to get exclusive access to ROBINSON EGYPT 


  </h3>
<h5 className='mb-3'>Don't Have An Account !</h5>
<button className='submit'>
  <Link href='/auth/signup'>

  Create Account
  </Link>
</button>

</div>
    </div>
</div>
  )
}

export default Signin
