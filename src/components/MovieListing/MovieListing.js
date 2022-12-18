import React from 'react'
import {useSelector} from "react-redux";
import {  getMovies,getAllShows } from '../../Features/movies/movieSlice';
import "./MovieListing.css"
import MovieCard from '../MovieCard/MovieCard';
const MovieListing = () => {
  let abc=useSelector(getMovies)
  let bca=useSelector(getAllShows)

  let renderMovies,renderShows="";
  
    renderMovies = abc.Response === "True"?(
      abc.Search.map((movie,index)=>{
        return <MovieCard movie={movie} index={index} key={movie.Title}/>
      })
    ):(
      <div className="movies-error"><h3>{abc.Error}</h3></div>
    )

    
  
    renderShows = bca.Response === "True"?(
      bca.Search.map((movie,index)=>{
        return <MovieCard movie={movie} index={index} key={movie.Title}/>
      })
    ):(
      <div className="movies-error"><h3>{abc.Error}</h3></div>
    )
  return(
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
      <div className="show-list">
        <h2>Show</h2>
        <div className="movie-container">
          {renderShows}
        </div>
      </div>
    </div>
  )
}

export default MovieListing