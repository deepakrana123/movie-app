import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import "./Home.css";
import {useDispatch} from "react-redux";
import { fetchAsyncMovies,fetchAsyncSeries } from '../../Features/movies/movieSlice';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() =>
  {
    const movieText="Harry";
    // const fetchData = async () => {
    //   const response =await movieApi.get(`?apiKey=${MovieApiKey}&s=${movieText}&type=movie`)
    //   .catch((err)=>{
    //     console.log(`error ${err}`)
    //   });
    //   dispatch(addMovies(response.data))
    //   console.log(response.data, "response")
    // };
    // fetchData()
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncSeries(movieText))


  },[dispatch])
  return (
    <>
    <div className="banner-img"></div>
    <MovieListing/>
    </>
  )
}

export default Home