import React, { useEffect } from 'react'

export const MovieList = ({ title }) => {
  useEffect(() => {
    document.title = title;
  })
  return (
    <div>
      <main className="container">
        {title=="Your Guide to Great Movies" ?<div className='bg-body-tertiary p-5 border mb-5'>
          <h3 className='text-primary'>Welcome to Movie hunt</h3>
          <p className='lead'>Discover movies you will love with personalized suggestions, curated collections, and quick searches, and quick searches- your guide to find great films</p>
          <button className='btn btn-primary'>Explore Now</button>
        </div>:""}
        <h5 className="text-danger py-2 border-bottom">
          {title}
        </h5>
      </main>
    </div>
  )
}

