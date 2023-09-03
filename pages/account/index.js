import { UserDatils } from '@/src/components/userComponents/userDetails';
import { Order } from '@/src/components/userComponents/userOrders';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
  import { Wishlist } from '@/src/components/userComponents/userWishlist';
  import styles from './user2.module.css';
import RootLayout from '@/src/components/layout';
import axios from 'axios';
import { HEADER_FOOTER_ENDPOINT } from '@/src/EndPoints';
import { useSelector } from 'react-redux';
import { userSelectMemo } from '@/src/store/user/user.selector';
import { useRouter } from 'next/router';
import LoadingImage from '@/src/components/customsComponents/image';
import { useEffect } from 'react';
import Head from 'next/head';
function User({seo,footer_header}) {
   const user = useSelector(userSelectMemo);
    const router =useRouter();
    // useEffect(()=>{

    //   // const timing = setTimeout(()=>{
    //   //   if(!!user){

    //   //     router.push('/')
    //   //   }
    //   },3000);
    //   return ()=> clearTimeout(timing)
    // },[])
  
    
  return (
   <>
   
   <Head>
        <title>
          {`Account - zat98`}
        </title>
      </Head>

   <RootLayout headerFooter={footer_header}  >
{
  user?<div className={`${styles.center} container-fluid`}>
  <Tab.Container id="left-tabs-example" defaultActiveKey="Orders"  >
  <Row style={{width:'100%'}}>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column"  >
        {/* <Nav.Item>
          <Nav.Link  eventKey="first">  userDetails</Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link eventKey="Orders">Orders</Nav.Link>
        </Nav.Item>
  
        <Nav.Item>
          <Nav.Link eventKey="Wishlist">Wishlist</Nav.Link>
        </Nav.Item>
    

      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        {/* <Tab.Pane eventKey="first"><UserDatils info={user?.personalInferomation}/></Tab.Pane> */}
        <Tab.Pane eventKey="Orders"><Order orders={user?.orders}/></Tab.Pane>
          <Tab.Pane eventKey="Wishlist"><Wishlist  list={user?.wishlist}/></Tab.Pane>
        </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>:null

}


</RootLayout>
   </>
  );
}




export const   getStaticProps = async()=>{
  const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
   let load=false;
   let seo = []
 
 try {
   seo = await getPage('account');
 
 } catch (error) {
   
 }
 
  return   {
    props:{
      footer_header:footer_header?.data||{},
        seo:seo[0]||[],
      load
     },
     revalidate:10
  
  }
 
 
 
 
 
 
 }

export default User;
