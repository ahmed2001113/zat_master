  import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistSelector } from '@/src/store/wishlist/wishlistSelector';
import { wishlistActions } from '@/src/store/wishlist/wishlistslice';
export default function Message() {
    const {openMessage,message} =useSelector(wishlistSelector);
     ;
    const dispatch = useDispatch()
  return (
   
   
      <Snackbar  
        anchorOrigin={{ vertical:'top', horizontal:'center' }}

        onClose={()=>dispatch(wishlistActions.setMessageOf())}
        open={openMessage}
         message={message}
       />
     
  )
}
