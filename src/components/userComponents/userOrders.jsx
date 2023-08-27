import OrderDetails from "./ordersTable"

export const Order =({orders})=>{
  console.log(orders)
        return(
            <>
         {
            orders.length? <>
<OrderDetails  order={orders}/>

</>

: <div>
<h1>You have no orders in your order history. </h1>
<p><a>click here</a> to continue shopping</p>
</div>        


}
</>


        )
 
    }

