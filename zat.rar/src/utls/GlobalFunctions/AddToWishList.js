import { UploadUserDataStart } from "@/src/store/user/user.actions";
import { wishlistActions } from "@/src/store/wishlist/wishlistslice";

export default function AddToWishLIst(
    wishlistItems,
    dispatch ,
    wishlistItem,
    currentUser){
         
        //dispatch addTo wishlist
        
        if(currentUser){
            dispatch(wishlistActions.setWishListItem(wishlistItem))
            
            //dispatch upload User Data with updataed Data
            dispatch(UploadUserDataStart({'wishlist':wishlistItems},currentUser))
            
            // dispatch(UploadUserDataStart({'wishlist':wishlistItems},currentUseruser))
             
            
        }  else{


            dispatch(wishlistActions.setWishListItem(wishlistItem))
        }


}