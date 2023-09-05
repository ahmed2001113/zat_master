 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function OrderStatuesModal({show,setShow,statues}) {

    return (
    <>
   

      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped>
      <thead>
        <tr>
           <th>Order</th>
          <th>total</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
      <tr>
{
   statues?.data? Object.keys(data).map((key,idx)=>{
    
         return(
           
           <>
             <td >{data[key]}</td></>
           
       
        )
    }):null
}
</tr>  
      </tbody>
    </Table>
            
        </Modal.Body>
         
      </Modal>
    </>
  );
}

export default OrderStatuesModal;