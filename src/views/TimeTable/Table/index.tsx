import React, { useState } from "react";
import InformationBox from "../InformationBox";

const Table = () => {
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
          {[
            { name: "VA", color: "red" },
            { name: "FR", color: "green" },
            { name: "", color: "" },
            { name: "SP", color: "blue" },
            { name: "VA", color: "purple" },
            { name: "", color: "" },
            { name: "", color: "" },
          ].map((lesson, index) => (
            <div
              key={index}
              className={`lesson-box flex-1 border text-center py-9 bg-${lesson.color} text-white relative`}
            >
              <InformationBox
                data={{
                  room: 406,
                  teacher: "Rabih Amhaz",
                  lesson: "Some Computer Stuff",
                }}
              />
              {lesson.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
