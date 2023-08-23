 import Link from 'next/link';
import React, { useState ,useEffect, useLayoutEffect} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './sign.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { EmailSignInStart } from '@/src/store/user/user.actions';
import { ErrorMessageSelector, loadingUser, userSelectMemo } from '@/src/store/user/user.selector';
import { useRouter } from 'next/router';
import RootLayout from '@/src/components/layout';
import axios from 'axios';
import { HEADER_FOOTER_ENDPOINT } from '@/src/EndPoints';
 const intial ={email:'',password:''};

const  Signin=({footer_header}) =>{

  const err = useSelector(ErrorMessageSelector);
  const user = useSelector(userSelectMemo);
  const loading = useSelector(loadingUser)
console.log(loading)
const router = useRouter()
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
    case'auth/too-many-requests':
return setFirebaseError(`Access to this account has been temporarily 
disabled due to many failed login attempts. You can immediately restore 
it by calling Support Team or you can try again later
`);

default:

return setFirebaseError('')


}
    } 
    

 
},[err.error ]);
useLayoutEffect(()=>{
  console.log(user)

  if(user){
    router.push('/')
  }
},[user])
  return (
<RootLayout headerFooter={footer_header}>

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
      <button className='submit mt-3'  disabled={loading}
       type='submit'> 
     
     {
      loading? <>loading...</>:<>
      
  sign in</>

     }
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
  Sign up now to get exclusive access to <br/>
  Zat98


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

</RootLayout>
  )
}

export default Signin




export const getStaticProps =async ()=>{
  const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
  return{
    props:{
      footer_header:footer_header?.data,

    }
  }
}