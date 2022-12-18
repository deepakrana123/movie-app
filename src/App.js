import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDeatils from './components/MovieDetails/MovieDeatils';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="App">
    <Router>

    <Header/>
    <div className="conatiner">

      <Routes>
        <Route path="/" extact element={<Home/>}/>
        <Route path="/movieDetails/:id" element={<MovieDeatils/>}/>
        <Route element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
    </div>
  );
}

export default App;
