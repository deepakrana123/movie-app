import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../../image/user.png";
import "./Header.css";
import {useDispatch} from "react-redux"
import { fetchAsyncMovies, fetchAsyncSeries } from '../../Features/movies/movieSlice';
const Header = () => {
  const [term , setTerm]=useState("");
  const dispatch = useDispatch();
 function submitHandler(){
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term))
  }
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">

          MovieApp
        </div>
      </Link>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="search movies and shows" onChange={(e)=>setTerm(e.target.value)}/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-logo">
        <img src={user} alt="user"/>
      </div>
      </div>
  )
}

export default Header