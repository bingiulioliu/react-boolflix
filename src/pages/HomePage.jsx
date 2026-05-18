import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieCard from "../components/MovieCard";


function HomePage() {
  const {movies} = useContext(SearchContext)


  return <>
    <h1>Home</h1>
    <div className="container">
      <div className="row">
          {movies?.results?.map(movie => (
            <div className="col-12 col-md-4 col-lg-3" key={movie.id}>
              <MovieCard key={movie.id} movie={movie}/>
            </div>
          ))}
      </div>
    </div>
    {JSON.stringify(movies)};
  </>;
}
export default HomePage;
