import Link from "next/link"
import OrderDetails from "./ordersTable"
import { CheckOutSelector, ordersSelector } from "@/src/store/checkoutSteps/checkout.selector";
import { useSelector } from "react-redux";

export const Order =()=>{
  const orders = useSelector(ordersSelector);
  return(
            <>
         {
            orders.length? <>
<OrderDetails  order={orders}/>

</>

: <div>
<h1>You have no orders in your order history. </h1>
<p><Link href="/shop">click here</Link> to continue shopping</p>
</div>        


}
</>


        )
 
    }

