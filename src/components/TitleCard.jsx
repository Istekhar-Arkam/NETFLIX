import cards_data from "../assets/cards/Cards_data";

const TitleCard = ({ title, category }) => {
  return (
    <div className="mt-4 ">
      <h2 className="px-2 mb-1 ml-2 text-xl font-bold sm:ml-8">{title ? title : "Popular on Netflix"}</h2>
      <div className="border-2 border-white sm:flex sm:ml-10 ">
        {cards_data.map((card, index) => {
          return (
            <div className="relative" key={index}>
              <img
                src={card.image}
                alt="movie-image"
                // card size
                className="px-3 pb-4 cursor-pointer"
              />
              <p className="absolute bottom-6 right-7">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
