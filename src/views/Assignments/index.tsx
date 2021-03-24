import { ReactComponent as DocumentIcon } from "assets/Icons/document.svg";
import { fetchAssignments } from "helpers/actions/tasks";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const LessonTask = () => {
  const history = useHistory();

  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    fetchAssignments().then((res) => {
      setAssignments(res.assignments);
    });
  }, []);
  return (
    <div className="py-10">
      <div className="md-header">Cyber Security Tasks</div>
      <div className="flex mt-5 p-6">
        <div className="flex-2">
          <p className="text text-gray bold">Task Description</p>
        </div>
        <div className="flex-1">
          <p className="text text-gray bold">Deadline</p>
        </div>
      </div>
      {assignments.map((assignment: any, index) => (
        <div
          key={index}
          className="flex border p-6 cursor-pointer"
          onClick={() => history.push("/assignment/" + assignment.id)}
        >
          <div className="flex-2 flex gap-6">
            <DocumentIcon />
            <div className="flex flex-column gap-1">
              <p className="text text-black bold">{assignment.name}</p>
              <p className="text text-gray text-xs">{assignment.description}</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text text-black bold">May 26, 2019</p>
            <p className="text text-gray text-xs">8:00 AM</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonTask;
