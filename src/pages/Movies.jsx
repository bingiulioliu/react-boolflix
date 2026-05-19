import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MediaList from "../components/MediaList";
import { TrendContext } from "../contexts/TrendingContext";
import TrendList from "../components/TrendList";


function Movies() {
  const { movies } = useContext(SearchContext);
  const {trendingMovies} = useContext(TrendContext);

  const movieList = movies?.results || [];

  const hasResults = movieList.length > 0;

  return <>
    {hasResults ? (
      <>
      <MediaList title='Movies' items={movies} type='movie' />
      </>
    ):(
      <>
      <TrendList title='Trending Movies' items={trendingMovies} type='movie' />
      </>
    )}
  </>
}
export default Movies;
