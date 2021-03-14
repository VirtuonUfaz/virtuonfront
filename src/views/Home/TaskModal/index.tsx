import Modal from "components/Modal";
import { useState } from "react";

const TaskModal = ({ show, setShow, tasks, setTasks }) => {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("0");
  const addTaskHandler = () => {
    setTasks([{ name: taskName, type: parseInt(taskType) }, ...tasks]);
    setShow(false);
  };

  return (
    <Modal show={show}>
      <h1 className="md-header">Create Task</h1>
      <form className="mt-10">
        <div className="flex flex-jc-sb">
          <div className="form-group">
            <label htmlFor="" className="form-label mb-2">
              Task
            </label>
            <input
              type="text"
              className="form-input"
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

            <select
              className="form-input"
              value={taskType}
              onChange={(e) => {
                setTaskType(e.target.value);
              }}
            >
              <option value="0">Default</option>
              <option value="1">New</option>
              <option value="2">Urgent</option>
            </select>
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
