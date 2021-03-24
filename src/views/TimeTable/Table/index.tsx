import { useState } from "react";
import InformationBox from "../InformationBox";

const Table = () => {
  let randomLessons = [
    {
      name: "OOP",
      color: "red",
      room: 207,
      teacher: "Rabih Amhaz",
      lesson: "Object Oriented Programing",
    },
    {
      name: "FR",
      color: "green",
      room: 206,
      teacher: "Ayten Xanim",
      lesson: "French Language",
    },
    {
      name: "",
      color: "",
      room: "",
      teacher: "",
      lesson: "",
    },
    {
      name: "SP",
      color: "blue",
      room: 406,
      teacher: "Etibar Vezirov",
      lesson: "Some Computer Stuff",
    },
  ];

  const generateRandomDay = () => {
    let testData: any[] = [];
    for (let i = 0; i < 7; i++) {
      testData.push(
        randomLessons[Math.floor(Math.random() * randomLessons.length)]
      );
    }
    return testData;
  };

  return (
    <div className="time-table rounded">
      <div className="flex">
        <div className="flex-1 border text-center py-4">Day</div>
        {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
          <div key={index} className="flex-1 border text-center py-4">
            {num}
          </div>
        ))}
      </div>
      {["Mo", "Tu", "We", "Th", "Fr"].map((days, index) => (
        <div key={index} className="flex">
          <div className="flex-1 border text-center py-9">{days}</div>
          {generateRandomDay().map((lesson, index) => (
            <div
              key={index}
              className={`lesson-box flex-1 border text-center py-9 bg-${lesson.color} text-white relative`}
            >
              <InformationBox data={lesson} />
              {lesson.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
