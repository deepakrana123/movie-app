import React, { useEffect } from 'react';
import {useDispatch , useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import { clearAsyncSingleMovie, fetchAsyncSinglMovie, getSingleDetails } from '../../Features/movies/movieSlice';
import "./MovieDeatils.css";
const MovieDeatils = () => {
  const {id}=useParams();
  const dispatch =useDispatch();
  const data = useSelector(getSingleDetails)

  useEffect(()=>{
    dispatch(fetchAsyncSinglMovie(id))

    return ()=>{
      dispatch(clearAsyncSingleMovie())
    }
      
  },[dispatch , id])
  console.log(data,"data")
  return (
    <div className="movie-section">
    {Object.keys(data).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <>
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
              {data.imdbVotes}
            </span>
            <span>
              Runtime <i className="fa fa-film"></i> : {data.Runtime}
            </span>
            <span>
              Year <i className="fa fa-calendar"></i> : {data.Year}
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div className="movie1">
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div className="movie1">
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div className="movie1">
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div className="movie1">
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div className="movie1">
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </>
    )}
  </div>
  )
}

export default MovieDeatils