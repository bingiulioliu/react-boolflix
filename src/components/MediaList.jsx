import MovieCard from "./MovieCard";


const MediaList = ({ title, items, type }) => {

    return <>
        <h2>{title}</h2>
        <div className="container">
            <div className="row">
                {items?.results?.map(item => (
                    <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                        {/* props */}
                        <MovieCard {...{ [type]: item }} />
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default MediaList;