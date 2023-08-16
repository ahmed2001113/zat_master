import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { 
    getAuth,
    onAuthStateChanged
    } from "firebase/auth";
import{ 
    getFirestore,
}from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCu3qsicyopUXABdoiraseld1e2wqy39Q8",
    authDomain: "zat-project-67f7c.firebaseapp.com",
    projectId: "zat-project-67f7c",
    storageBucket: "zat-project-67f7c.appspot.com",
    messagingSenderId: "397338942200",
    appId: "1:397338942200:web:bed0dc40b9b8f6d302f90d",
    measurementId: "G-526M2VPSFV"
  };
firebase.initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

export const firestore = firebase.firestore();
export const GetUserAuthStateReducer =  (callback)=>onAuthStateChanged(auth,callback);
 
export const OnAuthChangesAsync = ()=>{
    return new Promise((resolve,reject)=>{
        const unSubscribtion = onAuthStateChanged(auth,()=>{
            unSubscribtion();
            resolve(auth)
        },reject
        )
    })
}

export default firebase;

