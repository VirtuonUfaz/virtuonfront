import React from "react";
// import Cards from "../../components/Layout/Rooms/Cards/Cards";
import Cards from "../../components/Layout/Rooms/Cards/Cards";

const rooms = () => {

  let infos = [
    {time:"15:00-16:00", info:"Break"},
    {time:"02:00-04:00", info:"JASDHJJSAD"}
  ]

  let cardList = [
    {room:"102", type:"Staff", color:"#27AE60", infos:infos},
    {room:"103", type:"Lab", color:"red", infos:infos}
  ]

  let cards = cardList.map(card => {
    return (
      <Cards 
        room={card.room}
        type={card.type}
        color={card.color}
        infos={card.infos}
      />
    )
  }) 

  return (
    <div>
          {cards}
    </div>
  );
};

export default rooms;
