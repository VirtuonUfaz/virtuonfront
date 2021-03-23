import { useState, useEffect } from "react";
import { fetchTasks, updateTask } from "helpers/actions/tasks";
import { NavLink } from "react-router-dom";
import Plus from "assets/Icons/plus.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskModal from "./TaskModal";
const Home = () => {
  const [tasks, setTasks] = useState<Array<any>>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(data.tasks.slice(0, 3));
    });
  }, []);

  const updateTaskHandler = (id, e) => {
    updateTask(id, e.target.checked);
    setTasks(
      tasks.filter((task: any) =>
        task.id === id ? (task.is_resolved = e.target.checked) : task
      )
    );
  };

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

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex): Array<any> => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(tasks, result.source.index, result.destination.index);

    setTasks(items);
  };
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "white",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightgrey" : "white",
  });

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
            <NavLink to="/view-tasks" className="text text-blue cursor-pointer">
              View all
            </NavLink>
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
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {tasks.map((task: any, index) => (
                      <Draggable
                        key={index}
                        draggableId={index.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            key={index}
                            className="flex flex-jc-sb border-bottom px-8 "
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <div className="flex py-5">
                              <label className="custom-checkbox-label">
                                <input
                                  type="checkbox"
                                  checked={task.is_resolved}
                                  onChange={(e) => {
                                    updateTaskHandler(task.id, e);
                                  }}
                                />
                                <span className="custom-checkbox"></span>
                              </label>
                              <p className=" ml-4 text">{task.title}</p>
                            </div>

                            <div className="py-4">{taskTypeHandler(1)}</div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
