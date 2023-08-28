import axios from "axios";

const OrderStatuesFunction = async(id,setError)=>{
 try{
    const request = await axios.get( '/api/get-order',{
        params:{
          id:id
        }
      } );
return request
    }catch(err){
console.log(err)
 }
}

export default OrderStatuesFunction 