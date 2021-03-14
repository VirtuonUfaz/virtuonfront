import React from "react";
import Cards from "./Cards";

const rooms = () => {
  let cardList = [
    {
      room: "102",
      type: "Staff",
      color: "green",
      infos: [
        { time: "15:00-16:00", info: "Break" },
        { time: "02:00-04:00", info: "Meeting" },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "red",
      infos: [
        { time: "11:00-13:00", info: "UE803" },
        { time: "09:00-12:00", info: "KASFA" },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "red",
      infos: [
        { time: "11:00-13:00", info: "UE803" },
        { time: "09:00-12:00", info: "KASFA" },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "red",
      infos: [
        { time: "11:00-13:00", info: "UE803" },
        { time: "09:00-12:00", info: "KASFA" },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "yellow",
      infos: [
        { time: "11:00-13:00", info: "UE803" },
        { time: "09:00-12:00", info: "KASFA" },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "red",
      infos: [
        { time: "11:00-13:00", info: "UE803" },
        { time: "09:00-12:00", info: "KASFA" },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "green",
      infos: [
        { time: "11:00-13:00", info: "UE803" },
        { time: "09:00-12:00", info: "KASFA" },
      ],
    },
  ];

  let cards = cardList.map((card, k) => (
    <Cards
      key={k}
      room={card.room}
      type={card.type}
      color={card.color}
      infos={card.infos}
    />
  ));

  return (
    <div className="py-10">
      <h1 className="md-header">Rooms</h1>
      <div className="flex gap-10 flex-wrap">{cards}</div>
    </div>
  );
};

export default rooms;
