import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieCard from "../components/MovieCard";


function TvShows() {
  const {shows} = useContext(SearchContext)
  console.log(shows);
  

  return <>
    <h2>Tv Shows</h2>
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
export default TvShows;
