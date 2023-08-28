// import Image from "next/image"
// صفحه البرودكت هتعمل كمبوننت و فيه حاجه اسها ريفيوز وفي الفولدر ده هيبقي فيه ريفيوز كونتينر  ريفيوز كمبوننت و صقه ريفيو جي اس 
import { useSelector } from 'react-redux'
import WishlistItem from '../wishlistcomponents/wishlistitem'
import styles  from './user.module.css'
import { wishlistSelector } from '@/src/store/wishlist/wishlistSelector'
import Link from 'next/link'
// import love from '../../../public/svgs/love.svg'
export const Wishlist =({list})=>{
    const {wishlistItems} = useSelector(wishlistSelector);
     // WishlistItem
 
    return(
    <>
   {
        list.length?

        <>
        {
          wishlistItems?.length?  list?.map((item,index)=>{

                return<WishlistItem item={item} key={index}/>
            }):  <div>
<h1>You have no Items in WishList  </h1>
<p><Link href="/shop">click here</Link> to continue shopping</p>
</div>        

     


        }
        
        </>:
        <></>
       }
    </>
    )
 
}