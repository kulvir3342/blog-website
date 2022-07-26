import { async } from '@firebase/util';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const collectionRef = collection(db, "posts");

  useEffect(() => {
    // const getPosts = async () => {
    //   const data = await getDocs(collectionRef); 
    //   setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    // }

    // getPosts();

    onSnapshot(query(collectionRef, orderBy("timestamp", "desc")),
    snapshot => setPostList(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))));
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className='post' key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (<button onClick={() => deletePost(post.id)}>&#128465;</button>)}
              </div>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
            <h3>@{post.author.name}</h3>
          </div>
        )
      })}
      </div>
  )
}

export default Home;