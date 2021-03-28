import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { withRouter } from "react-router-dom";

const rooms = withRouter(({ history }) => {
  let cardList = [
    {
      room: "303",
      type: "Classroom",
      color: "green",
      infos: [
        {
          time: "15:00-16:00",
          info: "Lecture",
          teacher: "Sevda Mammadova",
          subject: "Vector Analysis",
          group: "Adm-017",
        },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "red",
      infos: [
        {
          time: "11:00-13:00",
          info: "UE803",
          teacher: "Sevda Mammadova",
          subject: "Mathematics",
          group: "Adm-018",
        },
        {
          time: "02:00-04:00",
          info: "Meeting",
          teacher: "Ulviyya Abdulkarimova",
          subject: "Mathematics",
          group: "Adm-017",
        },
      ],
    },
    {
      room: "102",
      type: "Lab",
      color: "red",
      infos: [
        {
          time: "11:00-13:00",
          info: "Break",
          teacher: "Sevda Mammadova",
          subject: "Linear Algebra",
          group: "Adm-019",
        },
        {
          time: "09:00-12:00",
          info: "Meeting",
          teacher: "Sevda Mammadova",
          subject: "Linear Algebra",
          group: "Adm-019",
        },
      ],
    },
    {
      room: "301",
      type: "Classroom",
      color: "red",
      infos: [
        {
          time: "11:00-13:00",
          info: "UE803",
          teacher: "Sevda Mammadova",
          subject: "Data Structures",
          group: "Std-017",
        },
        {
          time: "09:00-12:00",
          info: "KASFA",
          teacher: "Sevda Mammadova",
          subject: "Data Structures",
          group: "Std-017",
        },
      ],
    },
    {
      room: "201",
      type: "Lab",
      color: "yellow",
      infos: [
        {
          time: "11:00-13:00",
          info: "UE803",
          teacher: "Sevda Mammadova",
          subject: "Vector Analysis",
          group: "IT-018",
        },
        {
          time: "09:00-12:00",
          info: "KASFA",
          teacher: "Sevda Mammadova",
          subject: "Vector Analysis",
          group: "IT-018",
        },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "red",
      infos: [
        {
          time: "11:00-13:00",
          info: "UE803",
          teacher: "Sevda Mammadova",
          subject: "Vector Analysis",
          group: "Adm-017",
        },
        {
          time: "09:00-12:00",
          info: "KASFA",
          teacher: "Sevda Mammadova",
          subject: "Vector Analysis",
          group: "Adm-017",
        },
      ],
    },
    {
      room: "103",
      type: "Lab",
      color: "green",
      infos: [
        {
          time: "11:00-13:00",
          info: "UE803",
          teacher: "Sevda Mammadova",
          subject: "Vector Analysis",
          group: "Adm-017",
        },
        {
          time: "09:00-12:00",
          info: "KASFA",
          teacher: "Sevda Mammadova",
          subject: "Vector Analysis",
          group: "Adm-017",
        },
      ],
    },
  ];

  const [room, setRooms] = useState(cardList);

  return (
    <div className="py-10">
      <h1 className="md-header">Rooms</h1>
      <div className="flex gap-10 flex-wrap">
        {room.map((card, k) => (
          <Cards
            key={k}
            room={card.room}
            type={card.type}
            color={card.color}
            infos={card.infos}
            clicked={() => {
              history.push({
                pathname: "/roomsinside",
                detail: { card },
              });
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default rooms;
