import { HEADER_FOOTER_ENDPOINT } from '@/src/EndPoints'
import LoadingImage from '@/src/components/customsComponents/image'
import RootLayout from '@/src/components/layout'
import OrderStatuesModal from '@/src/components/userComponents/orderStatues'
import OrderStatuesFunction from '@/src/utls/GlobalFunctions/OrderStatues'
import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function Orderstatues({footer_header}) {
  const [number,setNumber] = useState(0);
  const [show,setShow] =useState(false);
  const [OrderStatues,setOrderStatues]=useState({});
  const [loading , setLoading]=useState(false);
  const[err,setErro]=useState(null)
  const orderStatues=async(id)=>{
   setLoading(true)
 
   try {
     const data = await OrderStatuesFunction(id);
     console.log(data)
     setOrderStatues(data)
     setLoading(false)
   
     setShow(true)
   } catch (error) {
          setOrderStatues({})
 console.log(error);
           setLoading(false)
    setErro(`there is error while processing order Inferomation Please Try again'`)
   }
 
 
 }
 
  const onsubmit=(e)=>{
e.preventDefault();
orderStatues(number);
setNumber(0)
  }
   return (
       <RootLayout headerFooter={footer_header} >
{
  loading&&<LoadingImage/>
}
    <div className="container orderStatues">
<div className='heading'>
<h1>      Check Order Status
</h1>
    <p>Get the latest update on your online order.

</p>
</div>
<div className='Form'>
<form  onSubmit={onsubmit}>

<TextField className='input_' onChange={(e)=>setNumber(e.target.value)}  name="number" label="ORDER NUMBER" required variant="standard" />

<br/>
<button className='submit'>

Check Status
</button>

{err&&<p>
  {err}</p>}
</form>
 </div>
    </div>
    <OrderStatuesModal show={show} setShow={setShow} statues={OrderStatues}/>

    </RootLayout>
  )
}


export const   getStaticProps = async( )=>{
  const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
    
 
  return   {
   props:{
     footer_header:footer_header?.data||{},
       
    },
    revalidate:10
 
 }
 
 }
 