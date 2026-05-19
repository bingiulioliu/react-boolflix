import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MediaList from "../components/MediaList";


function TvShows() {
  const {shows} = useContext(SearchContext)

  return <>
    <MediaList title='TV Shows' items={shows} type='show' />
  </>
}
export default TvShows;
