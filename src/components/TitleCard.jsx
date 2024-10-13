import cards_data from "../assets/cards/Cards_data";
import { useEffect } from "react";
import React, { useRef } from "react";

const TitleCard = () => {
  
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-2 mb-0">
      <h2 className="mb-3">Popular on Netflix</h2>
      <div className="flex gap-4" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="relative w-60">
              <img
                src={card.image}
                alt="movie-image"
                className="rounded-md cursor-pointer"
              />
              <p className="absolute bottom-1 right-3">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
