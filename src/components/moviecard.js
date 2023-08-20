import React from "react";
import "../styles.css/moviecard.css";

function Moviecard(props) {
  // console.log(props)
  return (
    <div className="container">
      <img src={props.data.Poster} className="image"alt="image-shown"/>
      <div className="details">
        <h3>{props.data.Title}</h3>
        <p>{props.data.Year}</p>
      </div>
    </div>
  );
}

export default Moviecard;
