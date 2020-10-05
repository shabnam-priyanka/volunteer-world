import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import google from '../../../images/google.png';
import { useContext } from 'react';
import { UserContext } from '../../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        console.log('click');
        firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = result.credential.accessToken;
            // The signed-in user info.
            //var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <div>
            <h1 onClick={googleSignIn}>Login with google</h1>
            
            <img src={google} alt="" style={{ height: '25px', width: '30px' }} onClick={googleSignIn} /> Login with Google+
            
            

        </div>
    );
};

export default Login;