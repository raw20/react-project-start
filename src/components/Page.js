import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Img.css";
function Page() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>loading....</h2>
      ) : (
        <>
          <div className="left">
            <img
              src={movie.medium_cover_image}
              className="bgImg"
              alt={movie.title}
            />
          </div>
          <div className="right">
            <h1>{movie.title}</h1>
            <p>{`year: ${movie.year}`}</p>
            <p>{`rating: ${movie.rating}`}</p>
            <p>{`runtime: ${movie.runtime} min`}</p>
          </div>
          <div>
            <hr />
            <h2>Description</h2>
            <p>{movie.description_full}</p>
          </div>
        </>
      )}
    </div>
  );
}
export default Page;
