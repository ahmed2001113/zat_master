 import Link from 'next/link';
 import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './sign.module.css'
function signup() {
  return (
  <div className={`container ${styles.cooo}`}>

<h1>create account</h1>

<form>
 
<>
      <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="mohamed..." />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="..." />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="LastName"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="..." />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <button className='submit mt-3'> 
  <Link href='auth/signup'>

  Create Account
  </Link>
</button>
<h6>Already Have Account </h6>
<Link href={`/auth/signin`}>
Sign In
</Link>
    </>
  
</form>

    </div>
  )
}

export default signup