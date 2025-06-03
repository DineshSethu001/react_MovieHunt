import { useEffect, useState } from 'react';

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const api_key = import.meta.env.VITE_API_KEY;
const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${api_key}&query=${queryTerm}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json.results || []);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
