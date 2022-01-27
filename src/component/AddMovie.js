import React from "react";
import "./AddMovie.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
function AddMovie() {
  const [movie, setMovie] = React.useState({
    name: null,
    image: null,
    description: null,
    category: "trending",
  });

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "carousels"), {
        image: movie.image,
        title: movie.title,
        description: movie.description,
      });


      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const submitForm = () => {
    if (movie.name && movie.image && movie.description && movie.category) {
      console.log("Form submitted");
      addData();
    } else {
      console.log("Please fill all the sections");
    }
  };

  return (
    <div className="AddMovie">
      <div className="form">
        <form>
          {console.log(movie.category)}

          <p>Name Of the Movie/Show:</p>
          <input
            type="text"
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
          </select>

          <p style={{ marginTop: 10 }}>Movie Poster Url</p>
          <input
            type="text"
            onChange={(event) =>
              setMovie({ ...movie, image: event.target.value })
            }
          />

          <p style={{ marginTop: 10 }}>Description</p>
          <input
            type="text"
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
