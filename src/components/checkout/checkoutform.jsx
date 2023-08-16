import { UserInferomationCheckoutSelector, UserInferomationShippingCheckoutSelector } from "@/src/store/checkoutSteps/checkout.selector";
import { checkoutActions } from "@/src/store/checkoutSteps/checkoutSteps";
import { Breadcrumbs, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
 import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Address from "./NewAddress";
import validateAndSanitizeCheckoutForm from "@/src/validator/checkout";

 export const CheckOutForm = ({item})=>{
   const inintializeUserInferomation = useSelector(UserInferomationCheckoutSelector);
   const [input,setInput] = useState(inintializeUserInferomation)
 const dispatch = useDispatch()
  const [data,setData] = useState([]);
 const [isFormValid, setIsFormValid] = useState(false);
 
const OnSubmit=(e)=>{
  e.preventDefault();
 
  dispatch(checkoutActions.SetUserInferomation(input));
  dispatch(checkoutActions.next())

console.log(input)
}
const HandleOnChange = (event,isShipping,isBilling)=>{
  const {target:{name,value}} = event || {};
console.log(name)
  const newState ={ ...input, [ name ]: value } ;
  setInput( newState );


}
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/Tech-Labs/egypt-governorates-and-cities-db/master/governorates.json')
          .then(response => {
              Object.values(response.data).map(key=>{
                setData(key?.data);

 
            })
           
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      
 
      const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" className="link" >
          Home
        </Link>,
        <Link
           key="2"
          color="inherit"
          href="/cart"
           className="link"
        >
          cart
        </Link>,
        <Typography key="3" color="text.primary" className="link">
     Shoping Information

        </Typography>,
      ];
    return(

        <>
       <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
     
    </Stack>
       <form  onSubmit={OnSubmit}>

       <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 mt-4 text-gray-900">SHoping  Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
      <div className="si" style={{textTransform:'uppercase'}}>
        sign Up for Best Experince
       

      <Link href="/auth/signup" className="mt-1 ms-2 text-sm leading-6 text-gray-600">
          sign up
          </Link>

      </div>
      
      <p   className="mb-1">
     Contacts    </p>

     <Address
    input={input}
    handleOnChange={(event)=>HandleOnChange(event,true,true)}
    isShipping
    
    />

     
        </div>
        <div className="button">
            <button className="black"   type="submit">
                Continue To Payment
            </button>
        </div>
       </form>
        </>
    )
}