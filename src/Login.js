
import React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css";
import {auth, provider,signInWithPopup} from "./firebase";

function Login() {
    const signInAuth =() => {
        
    signInWithPopup(auth,provider)
    .then((result) => console.log(result))
    .catch((error) => alert(error.message));  
    };

    return (
    <div className="login">
        <div className="login_container">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt=""
            />
            <div className="login_text">
                <h1>Sign in to sowmiya-whatsapp</h1>
            </div>
            <Button  onClick={signInAuth}>
                Sign In with  Google
            </Button>
        </div>
    </div>
  );
}

export default Login;

