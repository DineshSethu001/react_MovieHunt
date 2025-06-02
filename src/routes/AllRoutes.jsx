import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { MovieDetails, MovieList, PageNotFound, Search } from '../pages/index.js';

const AllRoutes = () => {
  return (
    <>
        <Routes>
                <Route path="/"               element={<MovieList       title="Your Guide to Great Movies"/>}/>
                <Route path="movies/popular"  element={<MovieList       title="Popular Movies" />} />
                <Route path="movies/top"      element={<MovieList       title="Top Movies" />} />
                <Route path="movies/upcoming" element={<MovieList       title="Upcoming movies"/>}/>
                <Route path="*"               element={<PageNotFound/>} title="please try again later" />

        </Routes>
    </>
  )
}

export default AllRoutes