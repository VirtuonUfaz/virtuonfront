import React from "react";
// import Cards from "../../components/Layout/Rooms/Cards/Cards";
import Cards from "../../components/Layout/Rooms/Cards/Cards";

const rooms = () => {


  let cardList = [
    {room:"102", type:"Staff", color:"#27AE60", infos:[{time:"15:00-16:00", info:"Break"},{time:"02:00-04:00", info:"JASDHJJSAD"}]},
    {room:"103", type:"Lab", color:"red", infos:[{time:"11:00-13:00", info:"UE803"},{time:"09:00-12:00", info:"KASFA"}]}
  ]

  let cards = cardList.map((card,k) => {
    return (
      <Cards 
        key={k}
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
