import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieCard from "../components/MovieCard";


function TvShows() {
  const {movies} = useContext(SearchContext)


  return <>
    <h1>Tv Shows</h1>
    <div className="container">
      <div className="row">
          {movies?.results?.map(movie => (
            <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
              <MovieCard key={movie.id} movie={movie}/>
            </div>
          ))}
      </div>
    </div>
    {JSON.stringify(movies)};
  </>;
}
export default TvShows;
