import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Error from "./pages/Error";
import { loader as allMoviesLoader } from "./components/GetMovies";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./styles/App.css";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route 
        path="/"
        loader={allMoviesLoader}
        errorElement={<Error />}
        element={<Home />}
      />
      
      <Route 
        path="/search"
        errorElement={<Error />}
        element={<Search />}
      />
      
      <Route
        path = "/*"
        errorElement = {<Error />}
        element = {<NotFound />}
      />
    </Route>
  ))
  
  
const App = () =>  {
  return (
  <RouterProvider router={router}/>
);
}

export default App;
