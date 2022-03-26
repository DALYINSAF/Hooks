import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';

import { movies } from "./Data";
import Navigation from "./Components/Navigation";
import SearchMovie from "./Components/SearchMovie";
function App() {
  const [films, setFilms] = useState(movies);
  const handeladd = (newmovie) => {
    setFilms([...films, newmovie]);
  };
  const [search, setSearch] = useState("");
  const handelserch = (searchedmovie) => {
    setSearch(searchedmovie);
  };
  const [rate, setRating] = useState(0); 

  
  const handleRating = (rate) => {
    setRating(rate);
    
  };
  return (

    <div className="App">
      <Navigation/>
      <SearchMovie
        searchp={search}
        handelserchp={handelserch}
        searchrate={rate}
        handelserchrate={handleRating}
      />
      <AddMovie handeladd={handeladd} />
      <MovieList movies={films} />
      moviesprops={films.filter(
          (film) =>
            film.title.toLowerCase().includes(search.toLowerCase()) &&
            film.rating >= rate
        )}
      
    </div>
  );
}

export default App;



