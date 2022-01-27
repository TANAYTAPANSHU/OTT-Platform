import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import {
  selectUserName,
  selectUserPhoto,
  selectUserEmail,
  setUserLoginDetails,
  setSignOutState,
} from "./feature/user/userSlice";
import Home from "./component/Home";

import AddMovie from "./component/AddMovie";

function App() {
  const userName = useSelector(selectUserName);
  console.log(userName, "Yeh hai");
  return (
    <div className="App">
      {" "}
      {!userName ? (
        <Login />
      ) : (
        <>
        
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/headerdata" element={<Header />} />{" "}
              <Route path="/addmovie" element={<AddMovie />} />{" "}
            </Routes>{" "}
          </BrowserRouter>{" "}
        </>
      )}
    </div>
  );
}

export default App;
