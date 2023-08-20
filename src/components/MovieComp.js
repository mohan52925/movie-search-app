import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../Redux/MovieSlice";
import Moviecard from "./moviecard";
import "../styles.css/MovieComp.css";

let input = {
  color: "black",
  fontSize: "30px",
  width: "25%",
  marginTop: "50px",
  padding: "20px",
  textAlign: "center",
  borderRadius: "5px",
  backgroundColor: "white",
  marginLeft: "calc((75vw)/2)",
};

function MovieComp() {
  const [text, setText] = useState("war");
  const movies = useSelector((store) => store.movie.movieData);
  const dispatch = useDispatch()
  useEffect(() => {
    (async function f1() {
      let url =  `https://www.omdbapi.com/?apikey=45f0782a&s=${text}`
      const response = await fetch(url);
      const data = await response.json();
      dispatch(addDetails(data));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    })();
  }, [dispatch,text]);
  return (
    <>
      <input
        style={input}
        placeholder="Search Your movies..."
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="card-div">
        {movies?.map((movie) => {
          return <Moviecard data={movie} />;
        })}
      </div>
    </>
  );
}

export default MovieComp;
