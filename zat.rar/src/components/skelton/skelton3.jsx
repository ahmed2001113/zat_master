import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
const Skelton3 =()=>{
    return(
<Grid   style={{width:"100%" , padding:"20px" ,display:"flex"}}>

<Box  style={{width:"50%" , height:'700px'}} sx={{ marginRight: 0.5, my: 1 }}>
     <Skeleton variant="rectangular" style={{width:"100%"}} height={700} />
</Box>          
<Box  style={{width:"50%" , height:'400px' , display:"flex"}} sx={{ marginRight: 0.5, my: 1 }}>
     <Skeleton variant="rectangular" style={{width:"100%" , height:"100%"}}  />
     <Skeleton variant="rectangular" style={{width:"100%",height:"100%"}} />
</Box>          


</Grid> 
    )
}
export default Skelton3 ;