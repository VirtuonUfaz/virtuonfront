import { useState } from "react";
import Modal from "components/Modal";
import { createTask } from "helpers/actions/tasks";

const TaskModal = ({ show, setShow, tasks, setTasks }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");

  const addTaskHandler = () => {
    createTask(taskName, null, priority, null).then((data) => {
      if (data !== null) {
        setTasks([{ title: taskName, priority }, ...tasks]);
        setShow(false);
      }
    });
  };

  return (
    <Modal show={show} setShow={setShow}>
      <h1 className="md-header">Create Task</h1>
      <form className="mt-10">
        <div className="flex flex-jc-sb">
          <div className="form-group">
            <label htmlFor="" className="form-label mb-2">
              Task
            </label>
            <input
              type="text"
              className="form-input form-w-100"
              placeholder="Task"
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label mb-2">
              Type
            </label>

            <input
              className="form-input form-w-100"
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          className="btn btn-primary btn-modal bg-green py-4 mt-8"
          type="button"
          onClick={addTaskHandler}
        >
          Create task
        </button>
      </form>
    </Modal>
  );
};

export default TaskModal;
