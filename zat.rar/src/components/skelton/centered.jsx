import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import styles from './sytle.module.css';
const SwippedCenteredSkelton = ()=>{
    return(
<Grid className={styles.grid2}>
<Box className={styles.box2} > 
      <Skeleton width="50%" height="30%" />
</Box>          

<Box  style={{width:"25%" , height:"500px"}} sx={{ marginRight: 0.5, my: 1 }}>
     <Skeleton variant="rectangular" style={{width:"100%",height:"500px"}}  />
     <Box sx={{ pt: 0.5 }}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
</Box>      

<Box  style={{width:"25%" , height:"500px"}} sx={{ marginRight: 0.5, my: 1 }}>
     <Skeleton variant="rectangular" style={{width:"100%",height:"500px"}}  />
     <Box sx={{ pt: 0.5 }}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
</Box>      

<Box  style={{width:"25%" , height:"500px"}} sx={{ marginRight: 0.5, my: 1 }}>
     <Skeleton variant="rectangular" style={{width:"100%",height:"500px"}}  />
     <Box sx={{ pt: 0.5 }}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
</Box>      


</Grid> 
    )
}
export default SwippedCenteredSkelton;