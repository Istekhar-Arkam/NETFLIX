//import { useState } from "react";
import cards_data from "../assets/cards/Cards_data";
//import axios from "axios";

const TitleCard = ({ title, category }) => {
  // const [apiData,setApiData]=useState([])
  // const options = {
  //   method: "GET",
  //   url: "https://api.freeapi.app/api/v1/public/youtube/videos",
  //   params: {
  //     page: "1",
  //     limit: "10",
  //     query: "javascript",
  //     sortBy:
  //       "keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest",
  //   },
  //   headers: { accept: "application/json" },
  // };
  // (async () => {
  //   try {
  //     const { data } = await axios.request(options);
  //     console.log(data);
  //     setApiData(data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })();

  const url = 'https://api.themoviedb.org/3/movie/changes?page=1';
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
  return (
    <div className="mt-4 sm:w-full">
      <h2 className="px-2 ml-1 text-xl font-bold capitalize sm:ml-20 sm:my-1">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div className="py-2 sm:gap-4 sm:flex sm:flex-wrap sm:justify-start sm:px-20">
        {cards_data.map((card, index) => {
          return (
            <div className="relative w-fit" key={index}>
              <img
                src={card.image}
                alt="movie-image"
                // card size
                className="px-3 pb-4 cursor-pointer w-80"
              />
              <p className="absolute uppercase bottom-5 right-6">{card.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
