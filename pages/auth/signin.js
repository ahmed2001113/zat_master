 import Link from 'next/link';
import React, { useState ,useEffect, useLayoutEffect} from 'react'
 import styles from './sign.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { EmailSignInStart } from '@/src/store/user/user.actions';
import { ErrorMessageSelector, loadingUser, userSelectMemo } from '@/src/store/user/user.selector';
import { useRouter } from 'next/router';
import RootLayout from '@/src/components/layout';
import axios from 'axios';
import { HEADER_FOOTER_ENDPOINT } from '@/src/EndPoints';
import FormInputComponent from '@/src/components/customsComponents/FormLayouts/FormControl';
import Head from 'next/head';
 const intial ={email:'',password:''};

const  Signin=({footer_header}) =>{
   const dispatch = useDispatch()
  const err = useSelector(ErrorMessageSelector);
  const user = useSelector(userSelectMemo);
  const loading = useSelector(loadingUser)
  const router = useRouter()

    const [firebaseError,setFirebaseError]=useState("")
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
useEffect(()=>{
  

  if(user){
    router.push('/')
  }
},[user])
  return (
<RootLayout headerFooter={footer_header}>
<Head>
        <title>
          {`Sign In - zat98`}
        </title>
      </Head>
<div className='container mt-5'>

<div className='row  ' style={{height:'100vh'}}>
<div className={`col-md-6 ${styles.left}`}>
<div className={`${styles.g}`}>
    
<h1>
      Welcom Back !
    </h1>

    <h5>Sign in for a more personalized experience</h5>
</div>

<form onSubmit={onsubmit}>
 
<>
    <FormInputComponent
        label='Email Address'
        required 
        HandleChange={onChange}
         name='email' type="email"  
          placeholder="name@example.com" 
            errormessage="
           Please Enter Valid Email"

          />
       <FormInputComponent
        label='Email Address'
        required 
        HandleChange={onChange}
         name='password'type="password"  
             errormessage="
           Please Enter  Your Password Key"

          />
 
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
<h5 className='mb-3'>{`Don't Have An Account !`}</h5>
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
      footer_header:footer_header?.data||{},

    }
  }
}