import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDtails]=useState()
  const {postDetails}= useContext (PostContext)
  const {firebase} =useContext(FirebaseContext)
useEffect(()=>{
  
  
const {userId}=postDetails
  firebase.firestore().collection('user').where('id','==',userId).get().then((res)=>{
    res.forEach(doc=>{
      setUserDtails(doc.data())
    })
  })
},[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
    <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.category}</span>
          <p>{postDetails.name}</p>
          <span>{postDetails.createAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.Username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
