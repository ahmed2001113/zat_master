 
import { GlobalSelector } from '@/src/store/global/globalStore.Selector';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';

function Drawer({show,setShow,children,title,placement,...others}) {
//   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas placement={placement} {...others} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
{
children
}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Drawer;