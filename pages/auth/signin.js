 import Link from 'next/link';
import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './sign.module.css'
const  Signin=() =>{
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

<form>
 
<>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <button className='submit mt-3'> 
  <Link href='auth/signup'>

  Create Account
  </Link>
</button>
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
