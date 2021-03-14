import Plus from "assets/Icons/plus.svg";
import TaskModal from "./TaskModal";
import { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      name: "Do Something",
      type: 0,
    },
    {
      name: "Do else",
      type: 1,
    },
    {
      name: "Do something else and more",
      type: 2,
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const taskTypeHandler = (key) => {
    switch (key) {
      case 0:
        return (
          <div className="rounded py-1 px-3 bg-light-gray text-white text-sm ">
            Default
          </div>
        );
      case 1:
        return (
          <div className="rounded py-1 px-3 bg-green text-white text-sm ">
            New
          </div>
        );
      case 2:
        return (
          <div className="rounded py-1 px-3 bg-red text-white text-sm ">
            Urgent
          </div>
        );
    }
  };

  return (
    <div className="py-10">
      <TaskModal
        show={showModal}
        setShow={setShowModal}
        tasks={tasks}
        setTasks={setTasks}
      />
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
            {[1, 2, 3, 4].map((task, index) => (
              <div
                key={index}
                className="flex flex-jc-sb border-bottom px-8 py-5"
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
                onClick={() => setShowModal(true)}
              />
            </div>
            {tasks.map((task, index) => (
              <div key={index} className="flex flex-jc-sb border-bottom px-8 ">
                <div className="flex py-5">
                  <label className="custom-checkbox-label">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                  </label>
                  <p className=" ml-4 text">{task.name}</p>
                </div>

                <div className="py-4">{taskTypeHandler(task.type)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
