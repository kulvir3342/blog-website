import React from 'react'
import {signInWithPopup} from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) =>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

  return (
    <div className='loginPage'>
        <p>Sign in With Google to Continue</p>
        <button onClick={signInWithGoogle} className='login-with-google-btn'>Sign in with Google</button>
    </div>
  )
}

export default Login