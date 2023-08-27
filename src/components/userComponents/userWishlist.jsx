// import Image from "next/image"
// صفحه البرودكت هتعمل كمبوننت و فيه حاجه اسها ريفيوز وفي الفولدر ده هيبقي فيه ريفيوز كونتينر  ريفيوز كمبوننت و صقه ريفيو جي اس 
import WishlistItem from '../wishlistcomponents/wishlistitem'
import styles  from './user.module.css'
// import love from '../../../public/svgs/love.svg'
export const Wishlist =({list})=>{
console.log(list)
    // WishlistItem
 
    return(
    <>
   {
        list.length?

        <>
        {
            list?.map((item,index)=>{

                return<WishlistItem item={item} key={index}/>
            })
        }
        
        </>:
        <></>
       }
    </>
    )
 
}