import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import useFetch from '../hooks/useFetch';

export const MovieList = ({ title, apiPath }) => {

  const {data:movies} = useFetch(apiPath)

  const navigator = useNavigate()
  useEffect(() => {
    document.title = title;
  })
  return (
    <div>
      <main className="container">
        {title=="Your Guide to Great Movies" ?<div className='bg-body-tertiary p-5 border mb-5'>
          <h3 className='text-primary'>Welcome to Movie hunt</h3>
          <p className='lead'>Discover movies you will love with personalized suggestions, curated collections, and quick searches, and quick searches- your guide to find great films</p>
          <button className='btn btn-primary' onClick={()=>{navigator("/movies/upcoming")}}>Explore Now</button>
        </div>:""}
        <h5 className="text-danger py-2 border-bottom">
          {title}
        </h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
         {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>
         })}

        </div>
      </main>
    </div>
  )
}

