import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MediaList from "../components/MediaList";
import { TrendContext } from "../contexts/TrendingContext";
import TrendList from "../components/TrendList";


function TvShows() {
  const {shows} = useContext(SearchContext);
  const {trendingShows} = useContext(TrendContext);

  return <>
    <TrendList title='Trending Shows' items={trendingShows} type='show' />
    <MediaList title='TV Shows' items={shows} type='show' />
  </>
}
export default TvShows;
