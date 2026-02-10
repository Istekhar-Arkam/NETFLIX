import { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjUwNDdhOTI4ZTBjZDI4ZmU0N2M1ODY1MzE0MWIyMyIsIm5iZiI6MTc2NDI2MjA2MS42ODk5OTk4LCJzdWIiOiI2OTI4ODBhZDRiNzFkYjZmMWUzMGQzNDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zWOvaRl_0tMMnE9bc7LXqx4cKDGtz8nS07ztjuzc5kk",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={back_arrow_icon}
          alt=""
          className="absolute w-12 cursor-pointer top-5 left-5"
          onClick={() => {
            navigate(-2);
          }}
        />
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          allowFullScreen
          frameBorder={0}
          className="w-50 h-40 sm:w-[90%] sm:h-[90%] rounded-lg"
        ></iframe>
        <div className="flex items-center justify-between w-[90%] text-white">
          <p className="text-red-600"> {apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
    </>
  );
};

export default Player;
