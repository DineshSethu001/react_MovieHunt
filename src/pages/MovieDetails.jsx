import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import backup from '../assets/backup.jpg'; // ✅ Make sure you import this
import { convertMinutes } from '../utils/utilis';

export const MovieDetails = () => {
  const { id } = useParams(); // ✅ cleaner destructuring
  const api_key = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;

  // ✅ Fetch only once when URL changes
  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setMovie(json);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [url]);

  // ✅ Only update title when movie is fetched
  useEffect(() => {
    if (movie.title) {
      document.title = movie.title;
    }
  }, [movie.title]);

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">
        {loading ? "Loading..." : movie.title}
      </h5>

      <div className="row">
        <div className="col-md-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : backup
            }
            className="img-fluid img-thumbnail"
            alt={movie.title}
          />
        </div>
        <div className="col-md-8">
          <h3 className='text-primary'>{movie.title}</h3>
          <p><strong>Overview:</strong> {movie.overview}</p>
          {movie.genres?(
            <p className='d-flex gap-3'>
              {movie.genres.map((genre)=>(
                <span key={genre.id} className='badge bg-danger'>{genre.name}</span>
              ))}
            </p>
          ):(""
          )}
          <p className='mt-2'>
            <i className='bi bi-star-fill text-warning'></i>{movie.vote_average} |
            <i className='bi bi-people-fill text-success'></i>{movie.vote_count} reviews 
          </p>
          <table className="table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
               <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
               <tr>
                <th>Runtime</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>
          <a className='btn btn-warning'
  href={`https://www.imdb.com/title/${movie.imdb_id}`} 
  target="_blank" 
  rel="noopener noreferrer"
>
  View on IMDb
</a>

        </div>
      </div>
    </main>
  );
};
