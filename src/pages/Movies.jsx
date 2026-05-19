import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MediaList from "../components/MediaList";


function Movies() {
  const { movies } = useContext(SearchContext)


  return <>
    <MediaList title='TV Shows' items={movies} type='movie' />
  </>
}
export default Movies;
