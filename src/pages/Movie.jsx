import React, { Suspense } from "react";
import { 
  useLoaderData, 
  defer, 
  Await
} from "react-router-dom";
import { movieData } from "../api.js";
import Spinner from "../components/Spinner";

export async function loader ({ params, request }) {
  const id = new URL(request.url).searchParams.get("id");
  return defer({data: movieData(id)})
}

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

function renderMovie (movie) {
  const { poster_path } = movie;
  console.log(movie);
  return (
    <img 
      className="movie-thumbnail" 
      src={poster_path !== "N/A" ? (IMG_PATH + poster_path) : "https://via.placeholder.com/400"} 
      alt={movie.title || movie.name}
    />
  );

}

export default function Movie () {
  const loaderData = useLoaderData();
  
  return (
    <div id="moviepage">
      <div className="movie-image">
        <Suspense fallback={<Spinner />}>
          <Await resolve={loaderData.data}>
            {renderMovie}
          </Await>
        </Suspense>
      </div>
    </div>

  );
}
