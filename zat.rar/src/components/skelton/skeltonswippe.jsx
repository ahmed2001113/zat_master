import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import styles from './sytle.module.css'
const Big =()=>{
    return(
<Grid className={styles.grid1}>
<Box className={styles.box}  >
     <Skeleton variant="rectangular" style={{width:"100%" , height:'100%'}} />

</Box>          
</Grid>
)}
export default Big ;

