import { useState, useEffect } from "react";
import InformationBox from "../InformationBox";

const Table = () => {
  let testData = [
    {
      name: "VA",
      color: "red",
      room: 406,
      teacher: "Rabih Amhaz",
      lesson: "Some Computer Stuff",
    },
    {
      name: "FR",
      color: "green",
      room: 406,
      teacher: "Rabih Amhaz",
      lesson: "Some Computer Stuff",
    },
    {
      name: "",
      color: "",
      room: 406,
      teacher: "Rabih Amhaz",
      lesson: "Some Computer Stuff",
    },
    {
      name: "SP",
      color: "blue",
      room: 406,
      teacher: "Rabih Amhaz",
      lesson: "Some Computer Stuff",
    },
    {
      name: "VA",
      color: "purple",
      room: 406,
      teacher: "Rabih Amhaz",
      lesson: "Some Computer Stuff",
    },
    {
      name: "",
      color: "",
      room: 406,
      teacher: "Rabih Amhaz",
      lesson: "Some Computer Stuff",
    },
    {
      name: "",
      color: "",
      room: 406,
      teacher: "Rabih Amhaz",
      lesson: "Some Computer Stuff",
    },
  ];
  const [data, setData] = useState(testData);
  //    useEffect(() => {
  //   fetchTimeTable().then((rooms) => setData(rooms));
  // }, []);
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
          {data.map((lesson, index) => (
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
