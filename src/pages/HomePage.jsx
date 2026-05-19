import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieCard from "../components/MovieCard";
import MediaList from "../components/MediaList";
import Header from "../components/Header";


function HomePage() {
  const {movies, shows} = useContext(SearchContext)


  return <>
    <h1 className="text-center">Movies and TV Shows</h1>

    <MediaList title='Movies' items={movies} type='movie' />
    <MediaList title='TV Shows' items={shows} type='show' />
  </>
}
export default HomePage;
