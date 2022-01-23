import React from "react";
import { provider } from "../firebase";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import hotstarImage from "../assests/disneylogo.png";
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from "../feature/user/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const auth = getAuth();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    React.useEffect(() => {
        auth.onAuthStateChanged(async(user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((err) => {
                    alert(err.message);
                });
        } else if (userName) {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
            });
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );

    };

    return ( <
        div className = "Login"
        style = {
            {
                display: "flex",
                flexDirection: "column",
                padding: 10,
                paddingTop: 5,
            }
        } >
        <
        div style = {
            { alignSelf: "flex-start" } } >
        <
        img style = {
            { height: 70, width: 90, objectFit: "contain" } }
        className = "brand-logo"
        src = { hotstarImage }
        alt = "Disney+&nbsp;Hotstar" /
        >
        <
        /div>{" "} {
            /* <button className="login-provider-button" onClick={handleAuth}>
                                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                                <span> Continue with Google</span>
                               </button> */
        } { " " } <
        div style = {
            {
                display: "flex",
                flexDirection: "column",
                paddingRight: 100,
                paddingTop: 10,
                marginTop: "6%",
            }
        } >
        <
        h2 style = {
            { color: "white" } } > Login to
        continue < /h2>{" "} <
        button onClick = { handleAuth }
        className = "loginbutton"
        style = {
            {
                color: "#1f81e1",
                marginTop: 20,
            }
        } >
        { " " }
        Have a gmail account ? { " " } <
        /button>{" "} <
        /div> <
        /div>
    );
}

export default Login;