import React from "react";
import DropdownExampleSelection from "../../components/Layout/Utility/Dropdown"
import "./Grades.css"

const Grades = () => {
    const addTaskHander = () => {};
    
    const yearOptions = [
        {
          key: '2020-2021',
          text: '2020-2021',
          value: '2020-2021',
        },
        {
          key: '2019-2020',
          text: '2019-2020',
          value: '2019-2020',
        },
        {
          key: '2018-2019',
          text: '2018-2019',
          value: '2018-2019',
        },
        {
          key: '2017-2018',
          text:  '2017-2018',
          value:  '2017-2018',
        },
        {
          key: '2016-2017',
          text: '2016-2017',
          value: '2016-2017',
        },
      ]

      const semesterOptions = [
        {
          key: '1 semester',
          text: '1 semester',
          value: '1 semester',
        },
        {
          key: '2 semester',
          text: '2 semester',
          value: '2 semester',
        },
        {
          key: '3 semester',
          text: '3 semester',
          value:'3 semester',
        },
        {
          key: '4 semester',
          text: '4 semester',
          value: '4 semester',
        },
      ]

      const subjectOptions = [
        {
          key: 'Mathematics',
          text: 'Mathematics',
          value: 'Mathematics',
        },
        {
          key: 'Mathematics',
          text: 'Mathematics',
          value: 'Mathematics',
        },
      ]


    return (
      <div className="py-10">
        <h1 className="md-header">Grades</h1>
        <div className="flex gap-7 my-8">
          <div className="border flex gap-7 rounded py-6 px-8 text-center">
            <p className="text bold text-md text-gray mb-5">Academic year</p>
            {/* <p className="text bold text-blue text-xxl text-secondary-font">
              120
            </p> */}
            <DropdownExampleSelection
                placeholder={"Select Year"}
                option={yearOptions}
            />
          </div>
          <div className="border flex gap-7 rounded py-6 px-8 text-center">
            <p className="text bold text-md text-gray mb-5">Semester</p>
            <DropdownExampleSelection
                placeholder={"Select Semester"}
                option={semesterOptions}
            />
          </div>
          <div className="border flex gap-8 rounded py-6 px-8 text-center">
            <p className="text bold text-md text-gray mb-5">Subject</p>
            <DropdownExampleSelection
                placeholder={"Select Subject"}
                option={subjectOptions}
            />
          </div>
        </div>


        <div className="flex gap-8 my-8">
          <div className="border rounded flex-1 flex-as-s">
            <div className="flex flex-jc-sb mb-2 pt-8 px-8">
              <div className="text bold text-md text-gray mb-5">Course</div>
              <div className="text bold text-md text-gray mb-5">Credit</div>
              <div className="text bold text-md text-gray mb-5">Due date</div>
              <div className="text bold text-md text-gray mb-5">Status</div>
              <div className="text bold text-md text-gray mb-5">Grades</div>
            </div>

            <div className="flex flex-column mt-9">
              {[1, 2, 3, 4, 5, 6].map((lesson, index) => (
                <div
                  key={index}
                  className="flex flex-jc-sb border-bottom px-8 py-4"
                >
                  <p className="text">Vector Analysis</p>
                  <p className="text">3</p>
                  <p className="text">24.04.20</p>
                  <p className="text">Graded</p>
                  <p className="text grade">13/100</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  };

export default Grades;
