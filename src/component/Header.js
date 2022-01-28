import React from "react";
import hotstarImage from "../assests/disneylogo.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { provider } from "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../feature/user/userSlice";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

function Header() {
  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);
    const auth = getAuth();
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleAuth = () => {
   if (userName) {
      signOut(auth).then(() => {
        dispatch(setSignOutState());
        window.location.href('/')
        
      });
    }
  };
 const onClick = () =>{
navigate('/addmovie');
 }
  return (
    <div className="Header">
      <div style={{ alignSelf: "flex-start" }} onClick={() =>{navigate('/')} }>
        <img
          style={{ height: 60, width: 90, objectFit: "contain" }}
          className="brand-logo"
          src={hotstarImage}
          alt="Disney+&nbsp;Hotstar"
        />
      </div>{" "}
      <div className="Header-Left" style={{display:'flex',flexDirection:'row',alignItems:'center' }}>
      <p onClick={onClick}>Add Movies</p>
      <span style={{color:'rgba(255, 254, 254, 0.8)'}} onClick={handleAuth}>LOGOUT</span>
      <Avatar alt={userName} src={userPhoto} />{" "}
      </div>
    </div>
  );
}

export default Header;
