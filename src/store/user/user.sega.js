import{all,call,put,takeLatest } from 'redux-saga/effects'
import { OnAuthChangesAsync } from '../../firebase/firebase.utls'
import{USERTYPES} from './user.types';
import{  UploadUserImageSuccess} from './user.actions'
import{GetUserFromDocs} from '../../firebase/firebaseMtethods/connectuserToDocs';
import { signInWithGoogle } from '../../firebase/firebaseMtethods/AddUserWithAuthProviders';
import { signUserOut } from '../../firebase/firebaseMtethods/signOut';
 import signIn from '../../firebase/firebaseMtethods/signInWithEmailAndPassword';
import { CreateUser } from '../../firebase/firebaseMtethods/signUpWithEmail&password';
import { adduserImageToStorage } from '../../firebase/firebaseMtethods/adduserImageToStorage';
import { addUserDataBase } from '../../firebase/firebaseMtethods/adduserData';
 import { CartActions   } from '../cart/cart.reducer';
import { userAction } from './user.reducer';
 //signing user and connect him||her to docs

function* GetUserSnapShotData (userAuth, additionalDetails ){
        if (!userAuth)return

         try{

                const snapShot = yield call(GetUserFromDocs,userAuth, additionalDetails );
                const {id} =snapShot;
                     yield put( userAction.signInSuccess({id,...snapShot.data()}))
                 if(snapShot.data()){


                        const {cart}=snapShot.data()
                        console.log(snapShot.data(),cart)
                               //once user sign in 
           return  yield put(CartActions.setCartItems(cart));  
                 }
                   
}
         catch(err){
 console.log(err.response.data)
                yield put(userAction.signInFaild(err.response.data))

         }  
}
//checkUserSession 
function* CheckuserSession(){
    try{
 
            const {currentUser} = yield call(OnAuthChangesAsync);
             if(!currentUser) return;
             yield call(GetUserSnapShotData,currentUser);
 
    }
    catch(error){
             yield put(userAction.signInFaild(error))
    }
}
//checkUserSession Pointer
 function* onCheckUserSession(){
   yield takeLatest(USERTYPES.CHECK_USER_SESSION,CheckuserSession)
 }
 //signingUSerUp

function* SignUPWithEmailANdPasswordProgress({payload}){
const {email,password,displayName} = payload;
try{
        const {user } = yield call( CreateUser,email,password);
         yield call(GetUserSnapShotData,user,{displayName});
         location.href = '/'

}catch(err){
         yield put(userAction.signInFaild(err.response.data))
}
}

 //signingUSerUp Pointer 



function* OnSignUSerUp(){
yield takeLatest(USERTYPES.EMAIL_SIGN_UP_START,SignUPWithEmailANdPasswordProgress)
}


 //signingIn WIth EMail&password;
function* SignInWithEmailANdPasswordProgress({payload}){
const{email,password} = payload;
try{
   const {user}=     yield  call(signIn,email,password);
        
location.href = '/'
   yield call(GetUserSnapShotData,user)
   yield put(userAction.signInSuccess(user))
console.log(user)

}catch(err){

        yield put(userAction.signInFaild(err))

}
}
 //signingIn WIth EMail&password Pointer
function* OnSignInStart (){
        
        yield takeLatest(USERTYPES.EMAIL_SIGN_IN_START,SignInWithEmailANdPasswordProgress)
}


 //google signin  
function* GoogleSignIn(){
      try{  
        const {user}= yield call( signInWithGoogle);;
        
        yield call(GetUserSnapShotData,user)

        location.href = '/'

}
        catch(err){

        }
 }
  //google signin pointer
function* OnSignInWIthGoogleStart(){
       yield takeLatest(USERTYPES.GOOGLE_SIGN_IN_START,GoogleSignIn)
}



//signing user out 
function* SigningUserOut(){
        try {
                yield call(signUserOut) ;
                yield put(userAction.signOutUser())
                yield put(CartActions.setCartItems([]));
        }catch(err){
                yield put(userAction.signInFaild(err))

        }
}
//signing user out start point
function* userSignOut (){
        yield takeLatest(USERTYPES.SIGN_OUT_START,SigningUserOut)
}


//userImageUpload
function* uploadUserImageProgress({payload:{image,user}}){
        if (!user)return
        try{
                //  console.log(snapShot)
               const userImageObject= yield call(adduserImageToStorage,image,user);
               const addToDataBase = yield call(
                addUserDataBase,
                {imageUrl:userImageObject.imageDownloadUrl},
                userImageObject.user)

               console.log(userImageObject,addToDataBase);
               const {currentUser} = yield call(OnAuthChangesAsync);
               const snapShot = yield call(GetUserFromDocs,currentUser);
                const {id} =snapShot
                yield put(UploadUserImageSuccess({id,...snapShot.data()}))
                }
                        catch(err){
                                                 }



// console.log(image,user)
        // image call(

}
function* UploadUserImageStart(){
        yield takeLatest(USERTYPES.UploadUserImageStart,uploadUserImageProgress)
}


// upload user start 
function* UploadUserDataProgress({payload:{data,user}}){

        
        yield call(addUserDataBase,data,user);
        const {currentUser} = yield call(OnAuthChangesAsync);
        const snapShot = yield call(GetUserFromDocs,currentUser);
        const {id} =snapShot
        console.log(id)
        yield put(userAction.UploadUserDataSuccess({id,...snapShot.data()}))
}

function* UploadUserDataStart(){
        yield takeLatest(USERTYPES.UploadUserDataStart,UploadUserDataProgress)
}
export function* CombineUserSaga(){
   yield all([
        call(onCheckUserSession),
        call(OnSignInWIthGoogleStart),
        call(userSignOut),
        call(OnSignInStart),
        call(OnSignUSerUp),
        call(UploadUserImageStart),
        call(UploadUserDataStart)
])

}