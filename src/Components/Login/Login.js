import React, { useContext } from 'react';
import { firebaseConfig } from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); // if already initialized, use that one
     }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName,email} = result.user;
                const signedInUser = {
                    name : displayName,
                    email : email,
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode , errorMessage);
                alert(errorMessage)
            });
    }
    return (
        <div className="container">
            <button className="btn btn-primary d-block m-auto" onClick={handleSignIn}> <FontAwesomeIcon icon={faGoogle}/> Login With Google</button>
        </div>
    );
};

export default Login;