import { useState, useEffect } from "react";
import { fetchTasks, updateTask, deleteTask } from "helpers/actions/tasks";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Tasks = () => {
  const [tasks, setTasks] = useState<Array<any>>([]);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(data.tasks);
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
  const deleteTaskHandler = (id) => {
    deleteTask(id);
    setTasks(tasks.filter((task: any) => task.id !== id));
  };

  const taskTypeHandler = (key) => {
    switch (key.toLowerCase()) {
      case "new":
        return (
          <div className="rounded py-1 px-3 bg-green text-white text-sm ">
            New
          </div>
        );
      case "urgent":
        return (
          <div className="rounded py-1 px-3 bg-red text-white text-sm ">
            Urgent
          </div>
        );
      default:
        return (
          <div className="rounded py-1 px-3 bg-light-gray text-white text-sm  ">
            {key}
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

  return (
    <div className="py-10">
      <h1 className="md-header">Tasks</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              className="flex flex-column flex-ai-c"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task: any, index: number) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="w-50 px-5 py-2 border rounded my-4 "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex flex-ai-c flex-jc-sb">
                        <label className="custom-checkbox-label ">
                          <input
                            type="checkbox"
                            checked={task.is_resolved}
                            onChange={(e) => {
                              updateTaskHandler(task.id, e);
                            }}
                          />
                          <span className="custom-checkbox"></span>
                        </label>
                        <p className="text">{task.title}</p>
                        <div className="py-4">
                          {taskTypeHandler(task.priority)}
                        </div>
                        <div
                          className="text text-md text-red cursor-pointer"
                          onClick={() => {
                            deleteTaskHandler(task.id);
                          }}
                        >
                          Delete
                        </div>
                      </div>
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
  );
};

export default Tasks;
