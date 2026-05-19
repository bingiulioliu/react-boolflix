import MovieCard from "./MovieCard";

const TrendList = ({title, items, type}) => {
return <>
        <h2>{title}</h2>
        <div className="container">
            <div className="row">
                {items?.map(item => (
                    <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                        {/* props */}
                        <MovieCard {...{ [type]: item }} />
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default TrendList