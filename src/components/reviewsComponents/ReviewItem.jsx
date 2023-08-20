import Image from "next/image"
import styles from './product.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Avatar, Chip } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
 const ReviewItem =({content,name,email,replies,date,rating})=>{
  console.log(replies)
    const [value, setValue] = React.useState(5);
    console.log(name)
    return(
            <div>
                 <div className={`row`}>
                  <div className={`col-md-12 col-sm-8 ${styles._itemR}`}  >

            <div className={`${styles.chip}`} style={{margin:'10px',textTransform:'capitalize',marginLeft:'0px'}}>
 
             <Chip avatar={<Avatar sx={{ bgcolor: deepPurple[500] }} 
             >{name[0]?.toUpperCase()}</Avatar>} label={name} />
             <p>
  {date}
</p>
             </div>
                     <Box
       sx={{
         '& > legend': { mt: 2 },}}>
       <Rating name="read-only" value={rating} readOnly />
     </Box>
<div className={`${styles.reviewC}`}>
 <div  dangerouslySetInnerHTML={{__html:content}} />

</div>  
{
  replies?.edges?.length&&replies?.edges?.map(reply=>{
     return   <div className={`col-md-12 col-sm-8 ${styles.replys} ${styles.re}`}  >

    <div className={`${styles.chip}`}
     style={{margin:'10px',textTransform:'capitalize',marginLeft:'0px',justifyContent:'space-between'}}>
    
<h5>Response from ZAT.98</h5>
     <p>
    {reply?.node?.date}
    </p>
     </div>
 
    <div className={`${styles.reviewC}`}>
    <div  dangerouslySetInnerHTML={{__html:reply?.node?.content}} />
    
    </div>
    
          </div>
  })
}
 
                  </div>
                 
                </div>
             </div>
        )
    }
    export default ReviewItem;