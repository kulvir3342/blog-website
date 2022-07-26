import { async } from '@firebase/util';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const collectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}, timestamp: serverTimestamp()});
    navigate("/");
  }

  useEffect(() => {
    if(!isAuth)
    {
      navigate("/login");
    }
  }, []);
 
  return (
    <div className='createPostPage'>
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label htmlFor="">TItle: </label>
          <input type="text" placeholder='Title...'  onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="inputGp">
          <label htmlFor="">Post: </label>
          <textarea placeholder='Post...' onChange={(e) => setPostText(e.target.value)}/>
        </div>

        <button onClick={createPost}>Submit Post</button>

      </div>
    </div>
  )
}

export default CreatePost