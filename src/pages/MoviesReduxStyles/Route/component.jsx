import React, { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/component";
import Details from "../Pages/Details/component";
import SearchResults from "../Pages/SearchResults/component";
import Error from "../Pages/Error/component";

const MoviesRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="details/:movieId" element={<Details/>}/>
        <Route path="search/:query" element={<SearchResults/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default MoviesRoute;