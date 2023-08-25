 
 import Link from 'next/link';
 import styles from './sign.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMAILSIGNUPSTART } from '@/src/store/user/user.actions';
import { ErrorMessageSelector, loadingUser, userSelectMemo } from '@/src/store/user/user.selector';
import { useRouter } from 'next/router';
import { HEADER_FOOTER_ENDPOINT } from '@/src/EndPoints';
import axios from 'axios';
import RootLayout from '@/src/components/layout';
import FormInputComponent from '@/src/components/customsComponents/FormLayouts/FormControl';
const initialData = {
firstName:'',
lastName:'',
email:'',
password:''

}

function Signup({footer_header}) {
  const dispatch = useDispatch();
  const loading = useSelector(loadingUser);
  const user = useSelector(userSelectMemo);
  
  
  const router=useRouter()
 
  const [firebaseError,setFirebaseError]=useState("")
  const [data,setData]=useState(initialData);
  const {firstName,lastName,email,password} = data;

  const err = useSelector(ErrorMessageSelector)
  
  const setForm = ()=>{
    setData(initialData)
}
  const onSubmit =(e)=>{
e.preventDefault();
if(!data.firstName||data.firstName===''&&!data.lastName&&!data.email&&!data.password) return;
 
dispatch(EMAILSIGNUPSTART({email,password,displayName:[firstName,lastName]}));





  }
  const onChange = (e)=>{
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })

  }

  useEffect(()=>{
    if(err.error !==null && err.error.message !=='' ){
 switch(err.error.code){
case 'auth/email-already-in-use':
   return setFirebaseError('this mail is already in use')
 case 'auth/invalid-email':
 
return setFirebaseError('invalid email  ')
case'auth/weak-password':
 
return setFirebaseError('Weak Passwords  ')
default:

return setFirebaseError('')


}
    } 

},[err.error])

useEffect(()=>{
  

  if(user){
    router.push('/')
  }
},[user])
   return (
<RootLayout  headerFooter={footer_header}>
<div className={`container ${styles.cooo}`}>

<h1>create account</h1>

<form onSubmit={onSubmit}> 
 
<>
      
        <FormInputComponent
        label='first name'
        required 
        HandleChange={onChange}
         name='firstName' type="text"  
          placeholder="mohamed..." 
           pattern='^[A-Za-z0-9]{3,16}$'
           errormessage="
           first Name should be 3-16 charachters and shouldn't include any special characters"

          />
       
       <FormInputComponent
        label='Last name'
        required 
        HandleChange={onChange}
         name='lastName' type="text"  
          placeholder="Ahmed..." 
           pattern='^[A-Za-z0-9]{3,16}$'
           errormessage="
           last Name should be 3-16 charachters and shouldn't include any special characters"

          />
             <FormInputComponent
        label='Email'
        required 
        HandleChange={onChange}
         name='email' type="email"  
         placeholder="example@gmail.com..." 
         email
         errormessage='it should be a valid email address'

          />
             <FormInputComponent
        label='Password'
        required 
        HandleChange={onChange}
         name='password' type="password"  
        
           errormessage='password should be 8-20 characters at least 1 number, 1 letter, one special characters'
           pattern='^(?=.* {8,}$'
          />
 
      <button className='submit   mt-3' 
      
      type='submit' disabled={loading}> 

      {loading?
<>loading...</>:
<>
create account
</>
}
 </button>

 {firebaseError?
        <p className='errorMessage'>
        {firebaseError}
        </p>:null}


<h6>Already Have Account </h6>
<button className='submit mt-3'> 
      <Link className='submit' href={`/auth/signin`}>
Sign In
</Link>
</button>
    </>
  
</form>

    </div>
</RootLayout>
  )
}

export default Signup

export const getStaticProps =async ()=>{
  const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
  return{
    props:{
      footer_header:footer_header?.data||{},

    }
  }
}