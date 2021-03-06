import React from "react";
import "./AddMovie.css";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
  selectUserEmail,
} from "../feature/user/userSlice";

function AddMovie() {
   const userName = useSelector(selectUserName);
   const userEmail = useSelector(selectUserEmail)
   
  const [movie, setMovie] = React.useState({
    name: "",
    image: "",
    description: "",
    category: "trending",
  });

  function urlValidator(url) {
    const regEx =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  const result = regEx.test(url);
      if (result === true ) {
        console.log("here");
      return true;
    } else {
         console.log("there");
      return false;
    }
  }

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, movie.category), {
        image: movie.image,
        title: movie.name,
        description: movie.description,
        approved : false,
        userName:userName,
        userEmail:userEmail,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const submitForm = () => {
    if (movie.name && movie.image && movie.description && movie.category) {
      if (urlValidator(movie.image)) {
        addData();
         alert("Added the Show/Movie, Approval may take 1-2 working days");
      } else {
       
        alert("Fill the correct url");
        
      }
       setMovie({
          name: "",
          image: "",
          description: "",
          category: "trending",
        });
    } else {
      console.log("Please fill all the sections");
    }
  };

  return (
    <div className="AddMovie">
      <div className="form">
        <form>
          {console.log(typeof movie.name)}

          <p>Name Of the Movie/Show:</p>
          <input
            type="text"
            value={movie.name}
            onChange={(event) =>
              setMovie({ ...movie, name: event.target.value })
            }
          />

          <p>Select the category</p>
          <select
            value={movie.category}
            onChange={(event) =>
              setMovie({ ...movie, category: event.target.value })
            }
          >
            <option value="trending">Trending</option>
            <option value="movie">Movie</option>
            <option value="popular">Popular Shows</option>
             <option value="carousels">Carousels</option>
          </select>

          <p style={{ marginTop: 10 }}>Movie Poster Url</p>
          <input
            type="text"
             value={movie.image}
            onChange={(event) =>
              setMovie({ ...movie, image: event.target.value })
            }
          />

          <p style={{ marginTop: 10 }}>Description</p>
          <input
            type="text"
             value={movie.description}
            onChange={(event) =>
              setMovie({ ...movie, description: event.target.value })
            }
          />
        </form>
        <div className="form_sumbit" onClick={submitForm}>
          Add
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
