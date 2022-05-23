import React, { useState  } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

 function App() {
  const [movies, setmovie] = useState([]);
  const[isloading,setisloading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(()=>{
    // Fetchmovies();
  // },[]);
  async function Fetchmovies() {
    setisloading(true);
    setError(null)
    try{
    const response = await fetch('https://swapi.dev/api/films/');
    if(!response.ok)
    throw new Error('somthing')
    const data = await response.json();

      const transfer = data.results.map(moviedata => {
        return {
          id: moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate: moviedata.release_date
        }
      });

      setmovie(transfer);
    }
    catch (error) {
      setError(error.message);
    }
      setisloading(false);
    }
  
  

  return (
    <React.Fragment>
      <section>
        <button onClick={Fetchmovies}>Fetch Movies</button>
      </section>
      <section>
       {!isloading && <MoviesList movies={movies} />}
       {!isloading && movies.length === 0 && <p>found not movie</p> }
       {isloading && <p>loading..</p>}
       {!isloading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
  }

export default App;
