import React, { Suspense } from "react";
import { 
  Link, 
  useLoaderData, 
  defer, 
  Await
} from "react-router-dom";
import Spinner from "./Spinner";
import { trendingMovies } from "../api.js"
import AllMovies from "./AllMovies";


export async function loader () {
  const trePage1 =  trendingMovies(1);
  const trePage2 =  trendingMovies(2);
  const trePage3 =  trendingMovies(3);
  const trePage4 =  trendingMovies(4);
  const trePage5 =  trendingMovies(5);
  
  const data = Promise.all([trePage1, trePage2, trePage3, trePage4, trePage5])
  
  return defer({ data });
  
}


export default function Movies() {
  const moviesData = useLoaderData();

  function renderMovies(loadedMovies) {
    
    const moviesBOX = [
      ...loadedMovies[0].results,
      ...loadedMovies[1].results, 
      ...loadedMovies[2].results,
      ...loadedMovies[3].results,
      ...loadedMovies[4].results
    ];
    
   
    const movies = AllMovies(moviesBOX);
    
    return movies;
  }


  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Await resolve={moviesData.data}>
            {renderMovies}
        </Await>
      </Suspense>
    </div>
  );

}
