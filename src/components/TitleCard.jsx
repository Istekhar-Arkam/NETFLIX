import cards_data from "../assets/cards/Cards_data";

const TitleCard = ({ title, category }) => {
  return (
    <div className="mt-4 sm:w-full">
      <h2 className="px-2 ml-1 text-xl font-bold capitalize sm:ml-16">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div className="py-2 sm:gap-4 sm:flex sm:flex-wrap sm:ml-16 sm:mr-10">
        {cards_data.map((card, index) => {
          return (
            <div className="relative w-fit" key={index}>
              <img
                src={card.image}
                alt="movie-image"
                // card size
                className="px-3 pb-4 cursor-pointer w-80"
              />
              <p className="absolute uppercase bottom-5 right-6">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
