import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MediaList from "../components/MediaList";
import { TrendContext } from "../contexts/TrendingContext";
import TrendList from "../components/TrendList";


function TvShows() {
  const { shows } = useContext(SearchContext);
  const { trendingShows } = useContext(TrendContext);

  const showList = shows?.results || [];

  const hasResults = showList.length > 0;

  return <>
    {hasResults ? (
      <>
      <MediaList title='TV Shows' items={shows} type='show' />
      </>
    ):(
      <>
      <TrendList title='Trending Shows' items={trendingShows} type='show' />
      </>
    )}
  </>
}
export default TvShows;
