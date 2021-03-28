import { ReactComponent as DocumentIcon } from "assets/Icons/document.svg";
import { fetchAssignmentsByID } from "helpers/actions/tasks";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TaskDetail = () => {
  const { id }: any = useParams();
  const [assignment, setAssignment]: any = useState({});
  useEffect(() => {
    fetchAssignmentsByID(id).then((res) => {
      setAssignment(res.assignment);
    });
  }, []);
  return (
    <div className="py-10">
      <div className="flex gap-8">
        <div className="flex-4">
          <div className="flex flex-ai-c gap-5 mb-4">
            <DocumentIcon />
            <h1 className="text text-xl text-blue ">{assignment?.name}</h1>
          </div>
          <div className="py-8 border-bottom">
            <p className="text text-gray mb-2">Nigar Yusifzada</p>
            <p className="text text-black bold mb-1">May 26, 2019</p>
            <p className="text text-xs text-gray">6:30 PM</p>
          </div>
          <p className="text py-8">{assignment?.description}</p>
        </div>
        <div className="flex-1">
          <div className="border rounded">
            <div className="bg-mid-blue px-4 py-3">
              <div className="flex flex-jc-sb">
                <p className="text text-white text-sm">My work</p>
                <p className="text text-white text-sm">Submitted</p>
              </div>
            </div>
            <div className="px-4 py-6">
              <div className="border py-3 px-2 mb-2 w-100">
                <label htmlFor="file-upload" className="text-center">
                  Weekly_Report_8_Murad_I...
                </label>
              </div>

              <input
                type="file"
                name=""
                id="file-upload"
                className="invisible"
              />
              <button className="btn w-100 py-3 text-blue bg-white border  fw-n">
                Cancel submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
