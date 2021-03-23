import { ReactComponent as DocumentIcon } from "assets/Icons/document.svg";
import { useHistory } from "react-router";

const LessonTask = () => {
  const history = useHistory();
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
      {[1, 1, 1, 1].map((task: any, index) => (
        <div
          key={index}
          className="flex border p-6 cursor-pointer"
          onClick={() => history.push("/task/" + task.id)}
        >
          <div className="flex-2 flex gap-6">
            <DocumentIcon />
            <div className="flex flex-column gap-1">
              <p className="text text-black bold">
                Bill Gates Malware reverse engeneering
              </p>
              <p className="text text-gray text-xs">Updated 2 days ago</p>
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
