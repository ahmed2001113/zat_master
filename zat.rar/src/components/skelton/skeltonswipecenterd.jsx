import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import styles from './sytle.module.css';
const Skelton2 = ()=>{
    return(
 
       
 
<Box className={'col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 pb-3 m-auto pb-md-6 pb-xl-8'} 
width={'380PX'}
style={{   height:"500px"}} sx={{ marginRight: 0.5, my: 1 }}>
     <Skeleton variant="rectangular" style={{height:"500px"}}  />
     <Box sx={{ pt: 0.5 }}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
</Box>      


     )
}
export default Skelton2;