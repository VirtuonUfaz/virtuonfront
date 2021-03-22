import { useState, useEffect } from "react";
import { fetchTasks, updateTask, deleteTask } from "helpers/actions/tasks";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);

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
      <h1 className="md-header">Tasks</h1>
      <div className="flex flex-column flex-ai-c">
        {tasks.map((task: any) => (
          <div className="w-50 px-5 py-2 border rounded my-4 ">
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
              <div className="py-4">{taskTypeHandler(1)}</div>
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
        ))}
      </div>
    </div>
  );
};

export default Tasks;
