import React from "react";
import { 
  Link
  } from "react-router-dom";
import Movies from "../components/GetMovies";
import SearchIcon from "../images/search.svg";

const Home = () => {
  
  return(
    <div className="app">
      <h1>MovieLand</h1>
      
      <Link className="search-link" to="/search">
        <div className="search">
          <input
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
          />
        </div>
      </Link>
      
      <Movies />
      
    </div>
  )
}

export default Home;