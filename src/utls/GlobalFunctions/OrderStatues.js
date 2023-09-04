import axios from "axios";

const OrderStatuesFunction = async(id,setError)=>{
 
    const request = await axios.get( '/api/get-order',{
        params:{
          id:id
        }
      } );
return request
   
}

export default OrderStatuesFunction 