import React, { useContext } from 'react';
import { firebaseConfig } from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
const Login = () => {
    firebase.initializeApp(firebaseConfig);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode , errorMessage);
            });
    }
    return (
        <div className="container">
            <button className="btn btn-primary" onClick={handleSignIn}> Log in</button>
        </div>
    );
};

export default Login;