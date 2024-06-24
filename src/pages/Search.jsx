import React, { useState } from "react";
import SearchMovies from "../components/SearchMovies";
import SearchIcon from "../images/search.svg";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return(
    <div className="app">
      <nav className="top-nav">
        <div className="search page">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
          setSearchTerm(e.target.value)
            }
            }
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
          />
        </div>
      </nav>
      
      
        {searchTerm.length > 0 ? 
          <SearchMovies 
            search={searchTerm}
          /> : 
          <header className="container">
          <p>
            Search and explore more <i>Movies</i> and <i>Tv-Shows</i>
          </p>
          </header>
        }
      
      
    </div>
  );
}

export default Search;