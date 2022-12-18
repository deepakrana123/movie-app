import React from 'react'
import "./MovieCard.css";
import {Link} from "react-router-dom"
const MovieCard = ({movie,index}) => {
  return (
    <div className="movieCard">
      <Link to={`/movieDetails/${movie.imdbID}`}>
      <div className="movieInner">
        <div className="movieTop">
          <img src={movie.Poster} alt={movie.Title}/>

        </div>
        <div className="movieBottom">
          <div className="movieInfo">
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        </div>
      </div>
        </Link>
    </div>
  )
}

export default MovieCard