 import PropTypes from 'prop-types';
 import React from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {v4} from 'uuid';
import styles from './order.module.css'
import Image from 'next/image';
 import OrderStatuesModal from './orderStatues';
import {   useState } from 'react';
import LoadingImage from '../customsComponents/image';
import OrderStatuesFunction from '@/src/utls/GlobalFunctions/OrderStatues';
    function createData(obj) {
  
 return{
  email:obj.email,
  orderId:obj.orderId,
  total:obj.total,
  items:obj.items,
  address:obj.address,
  id:v4()
}
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [show,setShow] =useState(false);
  const [OrderStatues,setOrderStatues]=useState({});
  const [loading , setLoading]=useState(false);
  const [err,setError] =useState(null)
 const orderStatues=async(id)=>{
  setLoading(true)

  try {
    const data = await OrderStatuesFunction(id);
    setOrderStatues(data)
    setLoading(false)
  
    setShow(true)
  } catch (error) {
    setError(err)
        setLoading(false)

  }


}

 

  return (
     <React.Fragment>
     {loading&&<LoadingImage/>} 
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.email}
        </TableCell>
        <TableCell align="right">{row.orderId}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
        <TableCell align="right">
<button className={`${styles.track_b}`} onClick={()=>orderStatues(row.orderId)}>
Track Order
</button>

        </TableCell>
       </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Items
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                     <TableCell>Item</TableCell>
                    <TableCell align="right">Image</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((item) => (
                    <TableRow key={item?.productId}>
                  
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="right">
<Image src={item?.image?.sourceUrl} width={200} height={200} alt={item?.image?.altText}/>

                      </TableCell>
                      <TableCell align="right">
                         {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>




<OrderStatuesModal show={show} setShow={setShow} statues={OrderStatues}/>
    </React.Fragment>
  );
}
 


export default function OrderDetails({order}) {
  console.log(order)
const rows = order.map(order=>{
  const obj={ email:order.orderInferomation.email,
    orderId:order.orderCreation.orderId,
    total:order.orderCreation.total,
    items:order.cartItems,
    address:order.orderInferomation.streetaddress}
    console.log(obj)
  return createData( obj )
 
}) 
 
  return (
    
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Email</TableCell>
            <TableCell align="right">order Id</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Track Order</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
