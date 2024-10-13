import React from 'react'
import cards_data from "../assets/cards/Cards_data"

const TitleCard = () => {
  return (
    <div>
<h2>Popular on Netflix</h2>
<div>
  {cards_data.map((card,index)=>{
    return <div key={index}>
<img src={card.image} alt="movie-image" />
<h3>{card.name}</h3>
    </div>  })}
</div>
    </div>
  )
}

export default TitleCard