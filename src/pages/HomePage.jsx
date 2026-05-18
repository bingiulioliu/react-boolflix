import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieCard from "../components/MovieCard";


function HomePage() {
  const {movies, shows} = useContext(SearchContext)


  return <>
    <h1 className="text-center">Movies and TV Shows</h1>
    <h2>Movies</h2>
    <div className="container">
      <div className="row">
          {movies?.results?.map(movie => (
            <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
              <MovieCard key={movie.id} movie={movie}/>
            </div>
          ))}
      </div>
    </div>
    <h2>Series</h2>
    <div className="container">
      <div className="row">
          {shows?.results?.map(show => (
            <div className="col-12 col-md-6 col-lg-4" key={show.id}>
              <MovieCard key={show.id} show={show}/>
            </div>
          ))}
      </div>
    </div>
  </>
}
export default HomePage;
