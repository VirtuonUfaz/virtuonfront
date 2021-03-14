// import Plus from "assets/Icons/plus.svg";
import Plus from "../../assets/plus.svg";
// import { useState } from "react";

const Home = () => {
  const addTaskHander = () => {};
  return (
    <div className="py-10">
      <h1 className="md-header">Home</h1>
      <div className="flex gap-7 my-8">
        <div className="border flex-1  rounded py-6 px-8 text-center">
          <p className="text bold text-md text-gray mb-5">Hours on lectures</p>
          <p className="text bold text-blue text-xxl text-secondary-font">
            120
          </p>
        </div>
        <div className="border flex-1  rounded py-6 px-8 text-center">
          <p className="text bold text-md text-gray mb-5">Lectures left</p>
          <p className="text bold text-blue text-xxl">16</p>
        </div>
        <div className="border flex-1  rounded py-6 px-8 text-center">
          <p className="text bold text-md text-gray mb-5">Average mark</p>
          <p className="text bold text-blue text-xxl">13.35</p>
        </div>
        <div className="border flex-1  rounded py-6 px-7 text-center">
          <p className="text bold text-md text-gray mb-5">Finished Homeworks</p>
          <p className="text bold text-blue text-xxl">83%</p>
        </div>
      </div>
      <div className="flex gap-7 my-8">
        <div className="border rounded flex-1 flex-as-s">
          <div className="flex flex-jc-sb mb-2 pt-8 px-8">
            <div className="sm-header">Unwatched lectures</div>
            <div className="text text-blue">View details</div>
          </div>
          <div className="text text-sm text-gray px-8">
            Group: <span className="text-blue">Classes</span>
          </div>
          <div className="flex flex-column mt-9">
            {[1, 2, 3, 4].map((lesson, index) => (
              <div
                key={index}
                className="flex flex-jc-sb border-bottom px-8 py-4"
              >
                <p className="text">Vector Analysis</p>
                <p className="text">3</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded flex-1 flex-as-s">
          <div className="flex flex-jc-sb mb-2 pt-8 px-8">
            <div className="sm-header">Tasks </div>
            <div className="text text-blue">View all</div>
          </div>
          <div className="text text-sm text-gray px-8">Tasks</div>
          <div className="flex flex-column mt-9">
            <div className="flex flex-jc-sb border-bottom px-8 py-4">
              <p className=" ml-4 text text-light-gray ">Create new task</p>

              <img
                src={Plus}
                alt=""
                className="cursor-pointer"
                onClick={addTaskHander}
              />
            </div>
            {[1, 2, 3].map((tasks, index) => (
              <div
                key={index}
                className="flex flex-jc-sb border-bottom px-8 py-4"
              >
                <div className="flex">
                  <label className="custom-checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                  </label>
                  <p className=" ml-4 text">Watch lecture of Rabih Amhaz</p>
                </div>

                <div className="rounded py-1 px-3 bg-red text-white text=sm">
                  Urgent
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
