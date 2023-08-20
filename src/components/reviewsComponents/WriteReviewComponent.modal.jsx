import Image from "next/image"
import styles from './product.module.css'
import { useState } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FormControl, Modal } from "react-bootstrap";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { userSelectMemo } from "@/src/store/user/user.selector";
 import {useQuery, useMutation} from '@apollo/client';
import { reviewMutation } from "@/src/lib/mutations/addReviewmutation";
 import {v4} from 'uuid';
import MessageToast from "../customsComponents/Notifications/message";

const initialData = {
  userName:'',
  email:'',
  rating:0,
  content:'',
  title:'',
  rec:''

}
const ReviewComponent =({setShow,show,name,image,id})=>{
  console.log(id)
  const currentUser = useSelector(userSelectMemo);
  console.log(currentUser)
  const [value,setValue]=useState('Recommended');
    const [reviewData,setData]=useState({});
  const [Loading,setLoading]=useState(false)
  const handleClose = () => setShow(false);
    const [rate,setRate]=useState(0)
  const [review,setReview]=useState(initialData);
  const {userName,email,title,content,rating}=review;
  const [notify,setNotify]=useState(false);
  const [message,setMessage]= useState('')
  const html = `
  <h4>
  ${title}
  </h4>
 <p>
  ${content}
  </p>
  `

  const input ={
    rating:+rating,
    content:html,
    commentOn:+id ,
    author:userName,
    authorEmail:currentUser?.email??email,
    clientMutationId: v4()
  }
  console.log(input)
  const [addrev,{
    data:resp,
    loading:load,
 
  }]=
  useMutation(reviewMutation,{
variables:{...input},
onCompleted:(data)=>{

  setMessage(`Thank You ${userName}
       for submitting a Review we will review it as soon as possible` );
     console.log(data)
    setNotify(true)
    setReview(initialData);
    setShow(false)
 }
,
onError:(error)=>{
  setMessage("there is error on your comment please try again");
    console.log(error )
    setNotify(true)
}


})
  const onSubmit=async(e)=>{
    
    e.preventDefault();
 if(+rating===0){

 setMessage("please submit Your Rating !");
 setNotify(true)
  return
 }
    try{

      const data_apollo = await addrev();
      console.log(data_apollo)
    }catch(err){
console.log(err)
    }
  }

  

   const onChange = (e)=>{
const {name,value} = e.target;

setReview({
  ...review,
  [name]:value
})
  }

    return(
      <>
            <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  onSubmit={onSubmit}>

          <div  >
              <div className="container">
                <div className={`row `}>
                    <div className={`col-12 col-sm-12 col-md-4 
                    ${styles.imgdiv
                    }`}>
                    <Image src={`${image.sourceUrl}`}
                     alt={image.altText} fill style={{objectFit:'cover'}}/>
                    </div>
                    <div className={`col-12 col-sm-12 col-md-8 ${styles.right2}`}>
                        <div>
                        <h4>Write a Review for <br/>
                        {name}</h4>
                        <p>Overall Rating*</p>
    <Box 
    sx={{'& > legend': { mt: 2 },}}>

<Rating name="rating" 
                        onChange={onChange}

defaultValue={rate} size="large" />
    </Box>
        </div>
                       <div className="row">
                        <div className="col-md-6">
                        <input name="userName" type="text" 
                        placeholder="Name *" 
                        required
                        defaultValue={currentUser?.displayName??''}
                        onChange={onChange}
                        className={styles.inp}/> 
                        </div>
                        <div className="col-md-6">
                        <input name="email" type="email" 
                        placeholder="Email *" 
                        required
                        defaultValue={currentUser?.email??''}
                        onChange={onChange}
                        className={styles.inp}/> 
                        </div>
                        <div className="col-md-12">
                        <input name="title" type="text" 
                        placeholder="Review Title " 
                        
                        onChange={onChange}
                        className={styles.inp}/> 
                        
                        </div>
                       </div>
                        <div>
                        <textarea
                         name="content"
                        maxLength={'1000'}
                        required
                        onChange={onChange}

                        placeholder="Leave a review here. 
                        Let others know what you liked or didn't liked." 
                        className={styles.text}>
                        </textarea>
                        <button className="black" disabled={
                          load?true:false
                        }  type="submit">
    Submit Review
  </button>
                    </div>                    
                    </div>
                </div>
              </div>
            </div>

        
          </form>
      
        </Modal.Body>
 <Modal.Footer>
 
 </Modal.Footer>
      </Modal>
      <MessageToast setShow={setNotify} show={notify} message={message}/>

      </>
        )
    }
    export default ReviewComponent;