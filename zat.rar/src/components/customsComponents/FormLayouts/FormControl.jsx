import React,{useState} from "react";
 import styles from './FormContro.module.css'
const FormInputComponent =({HandleChange,label,errormessage,...otherProps})=>{
const [focused,SetFocus]=useState(false);
 
    const handleFocus = (e)=>{
        SetFocus(true)
    }
return <div className={`${styles.group}`}>
        {
       label?
         (   <label className={` ${styles.form_input_label}`}>
                {label}
            </label>)
            :null
        


    }
    <input className={`${styles.form_input}`} onChange={HandleChange} {...otherProps} onBlur={handleFocus}
    
    focused={focused.toString()} />


<span>{errormessage}</span>  
</div>
}
export default FormInputComponent;