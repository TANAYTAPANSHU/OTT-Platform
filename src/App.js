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

function App() {
  const userName = useSelector(selectUserName);
  console.log(userName,"Yeh hai")
  return (
    <div className="App">
    {!userName ? (
      <Login />
    ) : (
      <>
      <Header />
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
               
          </Routes>
        </BrowserRouter>     
           </>
    ) }
    
    </div>
  );
}

export default App;
