import React from "react";
import hotstarImage from "../assests/disneylogo.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../feature/user/userSlice";
import Avatar from "@mui/material/Avatar";

function Header() {
  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);
  console.log(userPhoto);
  return (
    <div className="Header">
      <div style={{ alignSelf: "flex-start" }}>
        <img
          style={{ height: 60, width: 90, objectFit: "contain" }}
          className="brand-logo"
          src={hotstarImage}
          alt="Disney+&nbsp;Hotstar"
        />
      </div>{" "}
      <Avatar alt={userName} src={userPhoto} />{" "}
    </div>
  );
}

export default Header;
