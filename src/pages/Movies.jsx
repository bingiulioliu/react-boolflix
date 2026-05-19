import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MediaList from "../components/MediaList";
import { TrendContext } from "../contexts/TrendingContext";
import TrendList from "../components/TrendList";


function Movies() {
  const { movies } = useContext(SearchContext);
  const {trendingMovies} = useContext(TrendContext);

  return <>
    <TrendList title='Trending Movies' items={trendingMovies} type='movie' />
    <MediaList title='TV Shows' items={movies} type='movie' />
  </>
}
export default Movies;
