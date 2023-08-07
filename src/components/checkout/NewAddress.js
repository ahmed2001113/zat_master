import { TextField } from "@mui/material";
import InputFeild from "./form-elements/input-feild"
import PropTypes from 'prop-types';
import styles from './checkout.module.css'
const Address =({input,handleOnChange,isShipping,isbilling})=>{

 

    return(<>
   <div className={`${styles.wrapper}`}>
		<TextField
				name="email"
				type="email"
				defaultValue={input?.email}
				required
				onChange={handleOnChange}
				label="Email"
        className="  w-full m-auto"
        />

</div>
    <div className={`${styles.wrapper}`}>
      
    <TextField
          required
           name="firstname"
          id="outlined-required"
          label="firstname"
          defaultValue={input?.firstname}
          onChange={handleOnChange}
          className={`${styles.input}`}
         />
     
      <TextField
          required
          id="outlined-required"
          label="lastname"
          defaultValue={input?.lastname}
          onChange={handleOnChange}
         name="lastname"
         className={`${styles.input}`}

        />
    </div>
    
 
    <div className={`${styles.wrapper}`}>
    <TextField
          required
          id="outlined-required"
          label="street address"
          defaultValue={input?.streetaddress}
          onChange={handleOnChange}
          className=" w-full m-auto"
        placeholder="House number and street name"
        name="streetaddress"


        />
    </div>
 
<div className={`${styles.wrapper}`}>



      <TextField
          required
          id="outlined-required"
          label="Town/City"
          defaultValue={input?.city}
          onChange={handleOnChange}
          className={`${styles.input}`}
        placeholder="House number and street name"
        name="city"

        />
          <TextField
              name="zip"
           id="outlined-required"
           label="Post code"
          defaultValue={input?.zip}
          onChange={handleOnChange}
          
          className={`${styles.input}`}
                  placeholder="House number and street name"
 
        />
 
				<TextField
					name="phone"
					defaultValue={input?.phone}
					required
					onChange={handleOnChange}
					label="Phone"
          className={`${styles.input}`}
				/>
</div>
    
		 
	 
		 
	
    </>)
}


export default Address