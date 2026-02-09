import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFkNDMwMjkyZWE3MGE3YzE0MmIzNWRmMjY2MWI1YyIsIm5iZiI6MTc2NDI2MjA2MS42ODk5OTk4LCJzdWIiOiI2OTI4ODBhZDRiNzFkYjZmMWUzMGQzNDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jshnxKv8z6V179kr2OLNuiwmosne8r2TPgoBRa787Fs",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-4 sm:w-full">
      <h2 className="px-2 ml-1 text-xl font-bold capitalize sm:ml-20 sm:my-1">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div className="py-2 sm:gap-4 sm:flex sm:flex-wrap sm:justify-start sm:px-20">
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="relative w-fit" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt="movie-image"
                // card size
                className="px-3 pb-4 cursor-pointer w-80"
              />
              <p className="absolute uppercase bottom-5 right-6">
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
